import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  ac1: number | null = null
  ac2: number | null = null
  ag: number | null = null
  af: number | null = null
  media: number | null = null
  situation = ''

  constructor() { }

  ngOnInit(): void {}

  onSubmit () {
    if (!this.ac1 || !this.ac2 || !this.ag || !this.af) return
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45)
    if (this.media >= 5) this.situation = 'Aprovado'
    else this.situation = 'Reprovado'
  }

}
