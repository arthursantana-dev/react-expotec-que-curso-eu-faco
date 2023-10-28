export default function SingleCourseAffinity(props) {
	return(
		<>
			<div class="progress">
                <div class="progress-bar" style={{width: `${props.c.affinity}%`, backgroundColor: `var(--${props.c.name})`,  role:"progressbar", ariaValueNow:`${props.c.affinity}`, ariaValueMin:"0", ariaValueMax:"100"}}></div>

            </div>
			<span class="course__info">
				<p>{props.c.fullName}</p><p class="course__affinity">{props.c.affinity}%</p>
			</span>
		</>

	)
}