package br.ucb.uti.modelo;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Embeddable
public class Pressao {

	@Column(nullable = false)
	private double sistolica;

	@Column(nullable = false)
	private double diastolica;

	public boolean pressaoMaior(Pressao pressao) {
		return diastolicaMaior(pressao) || sistolicaMaior(pressao);
	}

	public boolean pressaoMenor(Pressao pressao) {
		return diastolicaMenor(pressao) || sistolicaMenor(pressao);
	}

	public boolean diastolicaMaior(Pressao pressao) {
		return this.diastolica > pressao.diastolica;
	}

	public boolean sistolicaMaior(Pressao pressao) {
		return this.sistolica > pressao.sistolica;
	}

	public boolean diastolicaMenor(Pressao pressao) {
		return this.diastolica < pressao.diastolica;
	}

	public boolean sistolicaMenor(Pressao pressao) {
		return this.sistolica < pressao.sistolica;
	}
}
