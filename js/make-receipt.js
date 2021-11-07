function imgPreview() {
    const brand_logo = document.getElementById('brand_logo_img');
    const receipt_form_img_preview = document.getElementById('receipt_form_img_preview');


    let img_url = URL.createObjectURL(brand_logo.files[0]);
    receipt_form_img_preview.src = img_url;
}

function receipt_info() {

    const receipt_preview_default_div = document.querySelector('.receipt_preview');
    const main_receipt_preview_div = document.querySelector('.main_receipt_preview_div');

    // input values

    const brand_logo = document.getElementById('brand_logo_img').files[0];

    const brand_name = document.getElementById('brand-name');

    const brand_address_1 = document.getElementById('address-1');
    const brand_address_2 = document.getElementById('address-2');

    const rcpt_date = document.getElementById('rcpt_date');
    const rcpt_time = document.getElementById('rcpt_time');
    const rcpt_marchant_id = document.getElementById('marchant_id');
    const rcpt_terminal_id = document.getElementById('terminal_id');


    const sequence_id = document.getElementById('sequence_id');
    const host_id = document.getElementById('host_id');

    const visa_card = document.getElementById('visa-card');

    const source_id = document.getElementById('source_id');

    const expiry_dt = document.getElementById('source_id');

    const currency_sign = document.getElementById('Currency_sign');
    const sub_total = document.getElementById('sub-total');

    const tax_amnt = document.getElementById('tax_amnt');

    const auth_code = document.getElementById('auth-code');

    
    // output values

    const prev_rcpt_logo = document.getElementById('prev_rcpt_logo');
    const prev_rcpt_brand_name = document.getElementById('prev_rcpt_brand_name');
    const prev_rcpt_addrss1 = document.getElementById('prev_rcpt_addrss1');
    const prev_rcpt_addrss2 = document.getElementById('prev_rcpt_addrss2');
    const prev_rcpt_date = document.getElementById('prev_rcpt_date');
    const prev_rcpt_time = document.getElementById('prev_rcpt_time');

    const prev_marchnt_no = document.getElementById('prev_marchnt_no');
    const prev_terminal_no = document.getElementById('prev_terminal_no');
    const prev_sequence_no = document.getElementById('prev_sequence_no');
    const  prev_host_no = document.getElementById('prev_host_no');
    const prev_visa_no = document.getElementById('prev_visa_no');
    const prev_source_key = document.getElementById('prev_source_key');
    const prev_expire_date = document.getElementById('prev_expire_date');
    const prev_subtotal_amnt = document.getElementById('subtotal_amnt');
    const prev_tax_amnt = document.getElementById('prev_tax_amnt');
    const prev_total_amnt = document.getElementById('prev_total_amnt');
    const prev_auth_code_no = document.getElementById('prev_auth_code_no');


    if (brand_name.value && brand_address_1.value && brand_address_2.value && 
        rcpt_date.value && rcpt_time.value && rcpt_marchant_id.value && rcpt_terminal_id.value && 
        sequence_id.value && host_id.value && visa_card.value && source_id.value && 
        expiry_dt.value && currency_sign.value && sub_total.value && tax_amnt.value && auth_code.value) {
            // brand logo
            let img_url = URL.createObjectURL(brand_logo);
            prev_rcpt_logo.src = img_url;

            prev_rcpt_brand_name.innerHTML = brand_name.value;
            prev_rcpt_addrss1.innerHTML = brand_address_1.value;
            prev_rcpt_addrss2.innerHTML = brand_address_2.value;
            prev_rcpt_date.innerHTML = rcpt_date.value;
            prev_rcpt_time.innerHTML = rcpt_time.value;
            prev_marchnt_no.innerHTML = rcpt_marchant_id.value;
            prev_terminal_no.innerHTML = rcpt_terminal_id.value;
            prev_sequence_no.innerHTML = sequence_id.value;
            prev_host_no.innerHTML = host_id.value;
            prev_visa_no.innerHTML = visa_card.value;
            prev_source_key.innerHTML = source_id.value;
            prev_expire_date.innerHTML = expiry_dt.value;
            prev_subtotal_amnt.innerHTML = currency_sign.value + sub_total.value;
            prev_tax_amnt.innerHTML = tax_amnt.value + '%';
            prev_auth_code_no.innerHTML = auth_code.value;
            prev_total_amnt.innerHTML = ((sub_total.value)*(tax_amnt.value))/100;

            // removing default img
            receipt_preview_default_div.style.display = 'none';
            main_receipt_preview_div.style.display = 'block';
        }else {
            const preview_btn = document.getElementById('preview-receipt-btn');
            preview_btn.classList.add('disabled');
        }
}

const click_To_prev_recpt = document.getElementById('preview-receipt-btn');

click_To_prev_recpt.addEventListener('click', receipt_info);


// pdf generator; used html2pdf.js



const pdf_generator = () =>{
    var final_prev_of_recpt_with_fll_info = document.getElementById('final_prev_of_recpt_with_fll_info');
    final_prev_of_recpt_with_fll_info.style.width = '380px';
    final_prev_of_recpt_with_fll_info.style.height = '680px';

    let rcpt_img = document.getElementById('prev_rcpt_logo');
    let brand_inpt_logo = document.getElementById('brand_logo_img').files[0];

    // converting uploaded img into base64
    var reader = new FileReader();
    reader.addEventListener('load', ()=>{

    rcpt_img.src = reader.result;
       
    var opt = {
        margin:       0, // it indicate number of page should show as pdf
        filename:     'receipt.pdf',
        image:        { type: 'png', quality: 0.98 },
        html2canvas: {scale: 1, letterRendering: true},
        jsPDF:        { unit: 'pt', format: [.75*380, .75*680] } // 1px = .75 points...pt=points
      };

    html2pdf().set(opt).from(final_prev_of_recpt_with_fll_info).toPdf().save();
    })
    reader.readAsDataURL(brand_inpt_logo);
}


// html div to image generator
const image_generator = () =>{
    var final_prev_of_recpt_with_fll_info = document.getElementById('final_prev_of_recpt_with_fll_info');
    final_prev_of_recpt_with_fll_info.style.width = '380px';
    final_prev_of_recpt_with_fll_info.style.height = '680px';
    final_prev_of_recpt_with_fll_info.style.border = '1px solid #3381ff';

    let rcpt_img = document.getElementById('prev_rcpt_logo');
    let brand_inpt_logo = document.getElementById('brand_logo_img').files[0];

    // converting uploaded img into base64
    var reader = new FileReader();
    reader.addEventListener('load', ()=>{

    rcpt_img.src = reader.result;

    html2canvas(document.querySelector("#final_prev_of_recpt_with_fll_info")).then(canvas => {
		a = document.createElement('a'); 
		document.body.appendChild(a); 
		a.download = "receipt.png"; 
		a.href =  canvas.toDataURL();
		a.click();
	});

    })
    reader.readAsDataURL(brand_inpt_logo);
}