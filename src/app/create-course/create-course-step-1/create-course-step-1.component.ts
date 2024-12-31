import {Component} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

const SAMPLE_TEST = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

@Component({
    selector: "create-course-step-1",
    templateUrl: "create-course-step-1.component.html",
    styleUrls: ["create-course-step-1.component.scss"],
    standalone: false
})
export class CreateCourseStep1Component {

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(1990,0,1), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [SAMPLE_TEST, [Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb: UntypedFormBuilder) {

  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate: Date, view) => {
    const date = cellDate.getDate();

    if(view === 'month') {
      return (date === 1) ? 'highlight-date' : '';
    }
    return '';
  }

  get courseTitle() {
    return this.form.controls['title'];
  }

}
