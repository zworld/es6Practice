/*
算法
 */
{
    //全局交换方法
    function swap(i,j,array){
        var temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }

    {
        //冒泡算法，内外两层循环
        //平均时间复杂度	最好情况	最坏情况	空间复杂度
        //O(n²)          	 O(n)	       O(n²)	 O(1)
        function bubble(arr){
            let len = arr.length;
            for(i = 0;i<len-1;i++){
                var complete = true//优化冒泡排序
                for(var j=i+1;j<len-1;j++){
                    if(arr[i]>arr[j]){
                        swap(i,j,arr);
                        complete = false
                    }
                }
                if(complete) return arr
            }
            return arr
        }
        console.log(bubble([3,4,2,1]))
        function reverseBubble(arr) {
            let len = arr.length;
            for(let i=0;i<len-1;i++){
                for(let j=i+1;j<len;j++){
                    var complete = true;
                    if(arr[i]<arr[j]){
                       swap(i,j,arr);
                        complete = false
                    };
                    if(complete) return arr
                }
            }
            return arr
        }
        console.log(reverseBubble([4,6,7,8]))
    }
    {
        //双向冒泡，每次循环把最小的排到前面，把最大的排到后面
        function bothwayBubbleSort(array){
            var tail = array.length-1, i, isSwap = false;
            for(i = 0; i < tail; tail--){
                for(var j = tail; j > i; j--){	//第一轮, 先将最小的数据冒泡到前面
                    array[j-1] > array[j] && (isSwap = true) && swap(j,j-1,array);
                }
                i++;
                for(j = i; j < tail; j++){		//第二轮, 将最大的数据冒泡到后面
                    array[j] > array[j+1] && (isSwap = true) && swap(j,j+1,array);
                }
            }
            return array;
        }
        console.log(bothwayBubbleSort([3,4,5,6,0,1]))
    }
    {
        //选择排序
        //层循环就像工人一样, 它是真正做事情的, 内层循环每执行一遍, 将选出本次待排序的元素中最小(或最大)的一个, 存放在数组的起始位置. 而 外层循环则像老板一样, 它告诉内层循环你需要不停的工作, 直到工作完成(也就是全部的元素排序完成).
        //平均时间复杂度	最好情况	最坏情况	空间复杂度
        //O(n²)             	O(n²)	    O(n²)	    O(1)
        function selectSort(arr) {
            let len = arr.length,min;
            for(let i = 0; i<len-1;i++){
                min = i;
                for(let j=i+1;j<len-1;j++){
                    arr[min]>arr[j] && (min=j);
                }
                min!=i && swap(min,i,arr);
            }
            return arr
        }
        console.log(selectSort([3,5,1,2,9]))

    }
    //插入排序
    {
        {
            //直接插入排序
            function directInsertionSort(arr){
                var len = arr.length,index,current;
                for(var i=1;i<len;i++){
                   index = i-1;
                   current = arr[i];
                   while(index>=0&&arr[index]>current){
                       arr[index+1] = arr[index];
                       index--
                   }
                }
            }
        }

    }

}