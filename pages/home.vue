<template>
  <div class="h-screen bg-slate-100">
    <div class="flex items-center justify-center pt-[100px]">
      <div class="h-[700px] w-[1100px] bg-white rounded-3xl">
        <div class="flex flex-row gap-[12px]">
          <div class="flex items-center gap-7 px-6 pt-[12px]">
            <div class="p-3 border-2 rounded-full box shadow-lg">
              <img class="w-[40px] h-[40px] rounded-full" src="/file.svg" />
            </div>
            <div class="text-black font-bold text-[36px]">Products</div>
          </div>
        </div>
        <div class="flex flex-row gap-[12px] pt-[18px] px-5">
          <div class="flex justify-between gap-28">
            <div
              class="flex flex-row items-center h-[80px] w-[400px] border-2 box shadow-sm rounded-2xl"
            >
              <img class="w-[40px] h-[50px] pt-2 px-2" src="/search.svg" />
              <input
                type="text"
                class="text-[30px] pt-2 px-1"
                placeholder="search"
              />
            </div>

            <div
              class="flex flex-row items-center h-[80px] w-[300px] border-2 box shadow-sm rounded-2xl"
            >
              <img class="w-[50px] h-[50px] pt-2 px-2" src="/calendar-2.svg" />
              <input
                type=" datetime-local"
                class="text-[20px] pt-2 px-1"
                placeholder=" Start Date --End Date"
              />
            </div>
          </div>
          <div
            class="flex flex-row h-[80px] w-[300px] border-2 box shadow-sm rounded-3xl bg-blue-600"
          >
            <div class="text-[20px] pt-6 text-white px-12">Create Quiz</div>
          </div>
        </div>

        <div class="flex flex-row">
          <div class="flex flex-row gap-[10px] pt-[31px] px-3 w-full">
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

            <div class="flex flex-row gap-[12px]">
              <div class="text-[20px] font-normal pt-2">Status</div>
              <div
                class="flex flex-row h-[50px] w-[120px] border-2 box shadow-sm rounded-xl bg-gray-100"
              >
                <!-- <el-select
                  v-model="filters.sort"
                  placeholder="Select"
                  class="filament select tiny !w-[150px]"
                >
                  <el-option label="Created At ▲" value="ASC" />
                  <el-option label="Created At ▼" value="DESC" />
                </el-select> -->

                <div class="text-black text-[18px] font-normal pt-2 px-4">
                  Select
                </div>
                <img class="h-[30px] w-[30px] pt-3" src="/downarrow.svg" />
              </div>
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
                  status
                  <img class="h-[30px] w-[30px]" src="/doublearrow.svg" />
                </div>
              </th>

              <th class="px-6 py-3">
                <div class="flex items-center gap-1">
                  Type
                  <img class="h-[30px] w-[30px]" src="/doublearrow.svg" />
                </div>
              </th>

              <th class="px-6 py-3">
                <div class="flex items-center gap-1">
                  created at
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
        </table>
      </div>
    </div>
  </div>
</template>
