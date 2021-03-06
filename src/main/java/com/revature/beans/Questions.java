package com.revature.beans;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Questions")
public class Questions {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="questSeq")
	@SequenceGenerator(allocationSize=1, name="questSeq", sequenceName="QUEST_SEQ")	
	@Column(name="qid")
	private int q_id;

	@Column(name="question", unique=true)
	private String question;
	
	@Column(name="successes")
	private int successes;
	
	@Column(name="total")
	private int total;
	
	@ManyToOne
	@JoinColumn(name="tid")
	Tags tag;
	
	@ManyToOne
	@JoinColumn(name="userid")
//	@JsonIgnore
	Users user;
	
//	@OneToMany(mappedBy="qid", fetch=FetchType.LAZY)
	@OneToMany(fetch=FetchType.EAGER)
  @JsonIgnore
	List<AnsweredQuestions> qaed;
	
//	@OneToMany(mappedBy="qid", fetch=FetchType.LAZY)
	@OneToMany(fetch=FetchType.EAGER, mappedBy="qid")
	@Cascade(CascadeType.SAVE_UPDATE)
	List<Responses> answers;
	
	public Questions(String question) {
		this.question = question;
		this.successes = 0;
		this.total = 0;
	}
	
	
	public Questions(int qid, String question, int successes, int total) {
		super();
		this.q_id = qid;
		this.question = question;
		this.successes = successes;
		this.total = total;

	}

	public Questions() {}

	@Override
	public String toString() {
		return "Questions [qid=" + q_id + ", question=" + question + ", successes=" + successes
				+ ", total=" + total + ", tag=" + tag + ", qaed=" + qaed + ", answers=" + answers + "]";
	}
	
	public List<AnsweredQuestions> getQaed() {
		return qaed;
	}


	public void setQaed(List<AnsweredQuestions> qaed) {
		this.qaed = qaed;
	}


	public List<Responses> getAnswers() {
		return answers;
	}


	public void setAnswers(List<Responses> answers) {
		this.answers = answers;
	}


	public int getQ_id() {
		return q_id;
	}
	public void setQ_id(int qid) {
		this.q_id = qid;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}

	public int getSuccesses() {
		return successes;
	}
	public void setSuccesses(int successes) {
		this.successes = successes;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}


	public Tags getTag() {
		return tag;
	}
	public void setTag(Tags tag) {
		this.tag = tag;
	}


	public Users getUser() {
		return user;
	}


	public void setUser(Users user) {
		this.user = user;
	}
	
	
	
	
}
