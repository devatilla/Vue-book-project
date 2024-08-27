<template>
  <div class="container">
    <SectionHeader :title="title" :text="text"></SectionHeader>
    <button>Back</button>
    <div class="row mb-4">
      <div class="col-md-6">
        <img src="../../template/images/about-img.png" class="card-img-top" alt="" />
      </div>
      <div class="col-md-6 details-wrapper">
        <h3 class="fw-semibold">Book Name</h3>
        <p class="lead description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptates, quod, quae,
          quos quia quibusdam quidem voluptatum aspernatur doloribus quas doloremque. Quisquam
          voluptates, quod, quae, quos quia quibusdam quidem voluptatum aspernatur doloribus quas
          doloremque. uos quia quibusdam quidem voluptatum aspernatur doloribus quas doloremque.
          Quisquam voluptates, quod, quae, quos quia quibusdam quidem voluptatum aspernatur
          doloribus quas doloremque.
        </p>
        <div class="mb-4">
          <div class="row border-bottom pb-2">
            <div class="col-lg-6"><strong>Page</strong></div>
            <div class="col-lg-6">278</div>
          </div>
          <div class="row border-bottom pb-2">
            <div class="col-lg-6"><strong>Category</strong></div>
            <div class="col-lg-6">Fiction</div>
          </div>
          <div class="row border-bottom pb-2">
            <div class="col-lg-6"><strong>Rating</strong></div>
            <div class="col-lg-6">7.8</div>
          </div>
          <div class="row border-bottom pb-2">
            <div class="col-lg-6"><strong>Upload Date</strong></div>
            <div class="col-lg-6">19 Jan 2019</div>
          </div>
        </div>
        <div class="comments-section">
          <h3 class="display-6 mb-2">Comments</h3>
          <div class="card mb-4">
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim unde soluta quod
                optio autem ex
              </p>
              <div class="d-flex justify-content-between">
                <p class="fw-bold fst-italic">Jhon Doe</p>
                <div class="d-flex align-items-center">
                  <p>UpVote</p>
                  <p class="ps-2"><strong>9</strong></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim unde soluta quod
                optio autem ex
              </p>
              <div class="d-flex justify-content-between">
                <p class="fw-bold fst-italic">Jhon Doe</p>
                <div class="d-flex align-items-center">
                  <p>UpVote</p>
                  <p class="ps-2"><strong>9</strong></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim unde soluta quod
                optio autem ex
              </p>
              <div class="d-flex justify-content-between">
                <p class="fw-bold fst-italic">Jhon Doe</p>
                <div class="d-flex align-items-center">
                  <p>UpVote</p>
                  <p class="ps-2"><strong>9</strong></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim unde soluta quod
                optio autem ex
              </p>
              <div class="d-flex justify-content-between">
                <p class="fw-bold fst-italic">Jhon Doe</p>
                <div class="d-flex align-items-center">
                  <p>UpVote</p>
                  <p class="ps-2"><strong>9</strong></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim unde soluta quod
                optio autem ex
              </p>
              <div class="d-flex justify-content-between">
                <p class="fw-bold fst-italic">Jhon Doe</p>
                <div class="d-flex align-items-center">
                  <p>UpVote</p>
                  <p class="ps-2"><strong>9</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "@/component/SectionHeader.vue";
export default {
  name: "BookDetailView",
  components: { SectionHeader },
  data() {
    return {
      title: "Book Detail",
      text: "This is the Book Detail page",
    };
  },
};
</script>

<style>
.details-wrapper {
  max-height: 740px;
  display: flex;
  flex-direction: column;
}
.comments-section {
  flex-grow: 1;
  overflow-y: auto;
}
.description {
  min-height: 150px;
  max-height: 250px;
  overflow-y: auto;
}
</style>
