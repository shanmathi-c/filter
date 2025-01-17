<template>
  <div class="flex justify-center items-center pt-[32px]">
    <div class="h-[400px] w-[770px] bg-slate-100 rounded-3xl">
      <div class="flex justify-between items-center px-7 h-[62px]">
        <div class="text-black text-[24px] font-normal pt-3">Create Quiz</div>
        <div class="h-[40px] w-[40px] rounded-lg border-2 box shadow-sm pr-3">
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
          <div class="flex justify-between items-center pr-2 w-full">
            <div class="text-[20px] pt-3 px-3">select</div>
            <img class="w-[16px] h-[16px]" src="/fullarrow.svg" />
          </div>
        </div>
      </div>

      <div class="w-full h-[100px] flex justify-between items-center pt-[42px]">
        <div class="px-6 pt-8 text-xl">Quiz Name</div>

        <div
          class="flex flex-row h-[60px] w-[400px] border-2 box shadow-sm rounded-2xl"
        >
          <div class="flex justify-between items-center pr-2 w-full">
            <div class="text-[20px] pt-3 px-3">Enter the quiz name</div>
            <img class="w-[16px] h-[16px]" src="/fullarrow.svg" />
          </div>
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
            <div class="flex justify-center items-center pr-2 w-full">
              <div class="text-[20px] pt-1 text-white">Create quiz</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
