<template>
  <div class="container">
    <header>
      <nav>
        <ul>
          <li><a href="#" class="active">ပင်မစာမျက်နှာ</a></li>
          <li><a href="#">ထုတ်ကုန်များ ▼</a></li>
          <li><a href="#">ဒီဇိုင်းကိုယ်တိုင်ရေးဆွဲခြင်း</a></li>
          <li><a href="#">ကျွန်ုပ်၏ အကောင့် ▼</a></li>
          <li><a href="#">ဆက်သွယ်ရန်</a></li>
          <li><a href="#">ဈေးနှုန်းတောင်းခံရန်</a></li>
        </ul>
      </nav>
    </header>

    <nav class="breadcrumb">
      <a href="#">ပင်မစာမျက်နှာ</a> / <span>ကုန်ပစ္စည်းရွေးချယ်ရန်</span>
    </nav>

    <h1>ကုန်ပစ္စည်း ထပ်ဆောင်းသတင်းအချက်အလက်</h1>

    <div class="content">
      <div class="preview">
        <img src="/img/Fabrix_T_Shirt_01_40091.0dd21194.jpg?height=400&width=300" alt="Business Card Preview" />
        <button class="preview-button">သင်၏ဒီဇိုင်းကိုကြည့်ရှုပါ</button>
        <p>PDF preview</p>
      </div>

      <div class="form">
        <div class="form-group">
          <label>အလုပ်အမည်</label>
          <div class="input-group">
            <input type="text" value="IBC_028" readonly />
            <button class="edit-button">Edit</button>
          </div>
        </div>

        <div class="form-group">
          <label>အရွယ်အစား</label>
          <input type="text" value='3.5" x 2.1" - Standard Business Card Size' readonly />
        </div>

        <div class="form-group">
          <label>အရေအတွက်</label>
          <select>
            <option>100</option>
          </select>
        </div>

        <div class="form-group">
          <label>စက္ကူအမျိုးအစား</label>
          <div class="radio-group">
            <input type="radio" id="artcard" name="paper-type" />
            <label for="artcard">Artcard 250GSM</label>
          </div>
        </div>

        <div class="form-group">
          <label>ပုံနှိပ်အမျိုးအစား</label>
          <div class="radio-group">
            <input type="radio" id="digital-press" name="print-type" />
            <label for="digital-press">Digital Press</label>
          </div>
        </div>

        <div class="form-group">
          <label>တစ်ဖက်လျှင် / နှစ်ဖက်လျှင်</label>
          <select>
            <option>One Side</option>
          </select>
        </div>

        <div class="form-group">
          <label>Lamination (ပလတ်စတစ်လွှာခြင်း)</label>
          <div class="radio-group">
            <input type="radio" id="none" name="lamination" />
            <label for="none">None</label>
          </div>
        </div>

        <div class="total">စုစုပေါင်း : Ks31,500.00</div>
      </div>
    </div>

    <p class="note">
      အရောင်းအချက် - စာလုံးပေါင်း နှင့် ပုံပေါ်တွင်အရောင်းအချက်များ မှန်ကန်ကြောင်းအတည်ပြုပါသည်။ Document Layout ကိုလည်း
      စီတန်းမှုမှန်ကန်ပါသည်။ ဒီအပေါ်ပြသော Document အတိုင်းသာ ပုံနှိပ်မည်ဖြစ်ကို သိရှိပြီးဖြစ်ပါသည်။ Order စာမျက်နှာတွင်
      Layout ဒီဇိုင်း ပြောင်းလဲမှု နှင့် စာလုံးပေါင်းမှားယွင်းမှုများကို ပြင်ဆင်ပြီးမှသာလျှင် မှာယူခြင်းသို့တက် သွားပြီး
      ဖြစ်ပါသည်။
    </p>

    <div class="actions">
      <button class="secondary">Save နှင့် Continue</button>
      <button class="primary">ဈေးဝယ်လှည်းထဲသို့ Save & Add</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.container {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background-color: #003366;
  padding: 10px 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li a.active {
  font-weight: bold;
}

.breadcrumb {
  margin: 20px 0;
}

.breadcrumb a {
  color: #003366;
  text-decoration: none;
}

h1 {
  color: #003366;
}

.content {
  display: flex;
  gap: 40px;
}

.preview {
  flex: 1;
}

.preview img {
  max-width: 100%;
  height: auto;
}

.preview-button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  text-align: center;
}

.form {
  flex: 2;
}

.form-group {
  margin-bottom: 20px;

  select {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
select {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
}

.input-group {
  display: flex;
}

.input-group input {
  flex-grow: 1;
}

.edit-button {
  background-color: #003366;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
}

.radio-group {
  display: flex;
  align-items: center;
}

.radio-group input[type="radio"] {
  margin-right: 5px;
}

.total {
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 20px;
}

.note {
  background-color: #f0f0f0;
  padding: 10px;
  margin-top: 20px;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button.secondary {
  background-color: #f0f0f0;
  color: #003366;
}

button.primary {
  background-color: #003366;
  color: white;
}
</style>