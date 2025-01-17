<template>
  <div class="h-screen bg-slate-100">
    <div class="flex items-center justify-center pt-[100px]">
      <div class="h-[700px] w-[1000px] bg-white rounded-3xl">
        <div class="flex flex-row gap-[12px]">
          <div class="flex items-center gap-7 px-6 pt-[12px]">
            <div class="p-3 border-2 rounded-full box shadow-lg">
              <img class="w-[40px] h-[40px] rounded-full" src="/file.svg" />
            </div>
            <div class="text-black font-bold text-[36px]">Quizz</div>
          </div>
        </div>

        <div class="flex flex-row gap-[12px] pt-[18px] px-5">
          <div class="flex justify-between gap-28">
            <div
              class="flex flex-row h-[80px] w-[300px] border-2 box shadow-sm rounded-2xl"
            >
              <img class="w-[40px] h-[50px] pt-5 px-2" src="/search.svg" />
              <div class="text-[20px] pt-5 px-1">search</div>
            </div>

            <div
              class="flex flex-row h-[80px] w-[300px] border-2 box shadow-sm rounded-2xl"
            >
              <img class="w-[50px] h-[50px] pt-5 px-2" src="/calendar-2.svg" />
            </div>
          </div>
          <div
            @click="getQuiz()"
            class="flex flex-row h-[80px] w-[300px] border-2 box shadow-sm rounded-3xl bg-blue-600"
          >
            <div class="text-[20px] pt-6 text-white px-12">Create Quiz</div>
          </div>
        </div>

        <div class="flex flex-row">
          <div class="flex flex-row gap-[10px] pt-[31px] px-3">
            <div
              class="flex flex-row h-[60px] w-[160px] border-2 box shadow-sm rounded-full bg-gray-100"
            >
              <div class="text-black text-[18px] font-normal pt-4 px-4">
                0 Filter applied
              </div>
            </div>
            <div
              class="flex flex-row h-[60px] w-[150px] border-2 box shadow-sm rounded-2xl"
            >
              <div class="text-black text-[18px] font-normal pt-4 px-4">
                Clear all filters
              </div>
            </div>
          </div>
          <div class="flex flex-row gap-[27px] pt-[40px] px-3">
            <div class="flex flex-row gap-[12px]">
              <div class="text-[20px] font-normal pt-2">Status</div>

              <el-select
                v-model="value"
                clearable
                placeholder="Select"
                style="width: 240px"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>

            <div class="flex flex-row gap-[12px]">
              <div class="text-[20px] font-normal pt-2">Sort by</div>
              <div
                class="flex flex-row h-[50px] w-[120px] border-2 box shadow-sm rounded-xl bg-gray-100"
              >
                <div class="text-black text-[18px] font-normal pt-2 px-4">
                  Select
                </div>
                <img class="h-[30px] w-[30px] pt-3" src="/downarrow.svg" />
              </div>
            </div>
          </div>
        </div>
        <table class="w-full">
          <thead class="w-full font-normal text-[20px]">
            <tr class="border-b-[1px] border-gray-500">
              <th class="px-6 py-3">
                <div class="flex items-center gap-1">
                  Id <img class="h-[30px] w-[30px]" src="/doublearrow.svg" />
                </div>
              </th>

              <th class="px-6 py-3">
                <div class="flex items-center gap-1">
                  Quiz Name
                  <img class="h-[30px] w-[30px]" src="/doublearrow.svg" />
                </div>
              </th>

              <th class="px-6 py-3">
                <div class="flex items-center gap-1">
                  Status
                  <img class="h-[30px] w-[30px]" src="/doublearrow.svg" />
                </div>
              </th>

              <th class="px-6 py-3">
                <div class="flex items-center gap-1">
                  Created At
                  <img class="h-[30px] w-[30px]" src="/doublearrow.svg" />
                </div>
              </th>

              <th class="px-6 py-3">
                <div class="flex items-center gap-1">
                  Actions
                  <img class="h-[30px] w-[30px]" src="/doublearrow.svg" />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            <!-- Loop through the product array for each item -->
            <tr
              v-for="(item, index) in product"
              :key="index"
              class="border-b-[1px] border-gray-500"
            >
              <td class="px-6 py-3">{{ item.id }}</td>
              <td class="px-6 py-3">{{ item.name }}</td>
              <td class="px-6 py-3">
                <div
                  class="flex flex-row h-[20px] w-[68px] border-emerald-700 border-[1px] box shadow-sm rounded-md bg-emerald-50"
                >
                  <div class="text-[12px] text-emerald-700 px-2">
                    {{ item.status }}
                  </div>
                </div>
              </td>
              <td class="px-6 py-3">{{ item.createdAt }}</td>
              <td @click="getEdit(index)" class="px-6 py-3">
                <div class="flex flex-row items-center">
                  <img class="h-[20px] w-[20px]" src="/edit-2.svg" />
                  <div class="text-blue-600">Edit</div>
                  <img class="h-[40px] w-[40px] px-2" src="/trash.svg" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      v-if="isQuiz"
      class="fixed inset-0 flex justify-center items-center bg-opacity-65 bg-black/70 pt-[32px]"
    >
      <div class="h-[400px] w-[770px] bg-slate-100 rounded-3xl">
        <div class="flex justify-between items-center px-7 h-[62px]">
          <div class="text-black text-[24px] font-normal pt-3">Create Quiz</div>
          <div
            @click="backHome()"
            class="h-[40px] w-[40px] rounded-lg border-2 box shadow-sm pr-3"
          >
            <div class="flex items-center justify-center">
              <img class="h-[40px] w-[40px]" src="/close.svg " />
            </div>
          </div>
        </div>

        <div class="w-full h-[80px] flex justify-between items-center">
          <div class="px-6 pt-8 text-xl">Select Courses</div>

          <div
            class="flex flex-row h-[60px] w-[400px] border-2 box shadow-sm rounded-2xl"
          >
            <input
              type="text"
              class="flex justify-between items-center pr-2 w-full text-[20px] pt-3 px-3"
              placeholder="select"
            />
            <!-- <div class="flex justify-between items-center pr-2 w-full">
              <div class="text-[20px] pt-3 px-3">select</div>
              <img class="w-[16px] h-[16px]" src="/fullarrow.svg" />
            </div> -->
          </div>
        </div>

        <div
          class="w-full h-[100px] flex justify-between items-center pt-[42px]"
        >
          <div class="px-6 pt-8 text-xl">Quiz Name</div>

          <div
            class="flex flex-row h-[60px] w-[400px] border-2 box shadow-sm rounded-2xl"
          >
            <input
              type="text"
              class="flex justify-between items-center pr-2 w-full text-[20px] pt-3 px-3"
              placeholder="Enter the quiz name"
              v-model="createQuiz.name"
            />
          </div>
        </div>
        <div class="border-b-[1px] w-full border-gray-200 pt-16"></div>
        <div class="flex flex-row items-center">
          <div class="px-[25px] pt-4">
            <div
              class="flex flex-row h-[60px] w-[300px] border-2 box shadow-sm rounded-2xl bg-slate-300"
            >
              <div class="flex justify-center items-center pr-2 w-full">
                <div class="text-[20px] pt-1">Cancel</div>
              </div>
            </div>
          </div>
          <div class="pt-3 px-16">
            <div
              class="flex flex-row h-[60px] w-[300px] border-2 box shadow-sm rounded-2xl bg-blue-600"
            >
              <div
                @click="getCreate()"
                class="flex justify-center items-center pr-2 w-full"
              >
                <div class="text-[20px] pt-1 text-white">Create quiz</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="isEdit"
      class="fixed inset-0 flex justify-center items-center bg-opacity-65 bg-black/70 pt-[32px]"
    >
      <div class="h-[400px] w-[770px] bg-slate-100 rounded-3xl">
        <div class="flex justify-between items-center px-7 h-[62px]">
          <div class="text-black text-[24px] font-normal pt-3">
            Edit product
          </div>
          <div
            @click="backEdit()"
            class="h-[40px] w-[40px] rounded-lg border-2 box shadow-sm pr-3"
          >
            <div class="flex items-center justify-center">
              <img class="h-[40px] w-[40px]" src="/close.svg " />
            </div>
          </div>
        </div>

        <div
          class="w-full h-[100px] flex justify-between items-center pt-[42px]"
        >
          <div class="px-6 pt-8 text-xl">Product Name</div>

          <div
            class="flex flex-row h-[60px] w-[400px] border-2 box shadow-sm rounded-2xl"
          >
            <input
              type="text"
              class="flex justify-between items-center pr-2 w-full text-[20px] pt-3 px-3"
              placeholder="Enter the product name"
              v-model="editProduct.name"
            />
          </div>
        </div>

        <div
          class="w-full h-[100px] flex justify-between items-center pt-[42px]"
        >
          <div class="px-6 pt-8 text-xl">status</div>

          <div
            class="flex flex-row h-[60px] w-[400px] border-2 box shadow-sm rounded-2xl"
          >
            <input
              type="text"
              class="flex justify-between items-center pr-2 w-full text-[20px] pt-3 px-3"
              placeholder="status"
              v-model="editProduct.status"
            />
          </div>
        </div>
        <div class="border-b-[1px] w-full border-gray-200 pt-16"></div>
        <div class="flex flex-row items-center">
          <div class="px-[25px] pt-4">
            <div
              class="flex flex-row h-[60px] w-[300px] border-2 box shadow-sm rounded-2xl bg-slate-300"
            >
              <div class="flex justify-center items-center pr-2 w-full">
                <div class="text-[20px] pt-1">Cancel</div>
              </div>
            </div>
          </div>
          <div class="pt-3 px-16">
            <div
              @click="createEditdata()"
              class="flex flex-row h-[60px] w-[300px] border-2 box shadow-sm rounded-2xl bg-blue-600"
            >
              <div class="flex justify-center items-center pr-2 w-full">
                <div class="text-[20px] pt-1 text-white">Update</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      createQuiz: {
        name: "",
      },

      editProduct: {
        name: "",
        status: "",
      },
      product: [],

      isHome: true,
      isQuiz: false,
      isEdit: false,
      options: [
        {
          value: "Draft",
          label: "Draft",
        },
        {
          value: "Published",
          label: "Published",
        },
        {
          value: "Deleted",
          label: "Deleted",
        },
      ],
    };
  },

  mounted() {
    this.getData();
    // this.editProduct.id = this.$route.query.id || "";

    // this.getId();
  },

  methods: {
    getQuiz() {
      this.isHome = false;
      this.isQuiz = true;
      this.isEdit = false;
      console.log("isQuiz", this.isQuiz);
      console.log("isHome", this.isHome);
      console.log("isEdit", this.isEdit);
    },
    backHome() {
      this.isQuiz = false;
      this.isHome = true;
      this.isEdit = false;
    },

    getEdit(index) {
      this.editProduct = this.product[index];
      this.isEdit = true;
      this.isQuiz = false;
      this.isHome = false;
    },
    backEdit() {
      this.isEdit = false;
      this.isQuiz = false;
      this.isHome = true;
    },
    async getCreate() {
      try {
        console.log("this.createQuiz", this.createQuiz);
        if (!this.createQuiz.name) {
          alert("Quiz name is required!");
          return;
        }

        const response = await this.$http.post(
          "http://localhost:5000/filter/create",

          { body: this.createQuiz }
        );

        if (response.status === 201 || response.status === 200) {
          alert("Quiz created successfully!");
          this.backHome(); // Navigate back to home view
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Error creating quiz:", error);
        alert("Failed to create quiz. Check the console for details.");
      }
    },

    async getData() {
      const res = await this.$http.$get("http://localhost:5000/data/get");
      if (res.success) {
        this.product = res.book;
      }
    },
    async getId() {
      const res = await this.$http.$get(
        `http://localhost:5000/product/indi?id=${this.editProduct.id}`
      );
      if (res.success) {
        this.editProduct = { ...res.result[0] };
      }
    },
    async putProduct(event) {
      event.preventDefault(); // Prevent page reload on button click
      console.log("this.editProduct", this.editProduct);

      const res = await this.$http.$put(
        "http://localhost:5000/product/update-product",
        {
          body: this.editProduct,
        }
      );

      if (res.success) {
        alert("Updated!");
      } else {
        console.error("Failed to update data", res.error);
      }
    },
    async createEditdata() {
      const res = await this.$http.$post(
        "http://localhost:5000/product/PostProduct",
        {
          body: this.editProduct,
        }
      );
      if (res.success) {
        alert("Data inserted successfully!");
      } else {
        console.error("Failed to update data", res.error);
      }
    },
  },
};
</script>
