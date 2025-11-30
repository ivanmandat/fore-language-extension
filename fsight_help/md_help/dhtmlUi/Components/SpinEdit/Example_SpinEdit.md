# Пример создания компонента SpinEdit

Пример создания компонента SpinEdit
-


# Пример создания компонента SpinEdit


Для выполнения примера подключите библиотеку компонентов PP.js и таблицы
 визуальных стилей PP.css. Далее приведен javascript-код, при помощи которого
 на html-странце будет размещено поле ввода с кнопками прокрутки:


<script type="text/javascript">


var SE = new PP.Ui.SpinEdit({


     ParentNode: document.getElementById("SE1"),//Создаем компонент SpinEdit


     Width: 100,


     SpinUp: spinUp,//Добавляем обработчик события SpinUp.


     SpinDown: spinDown,//Добавляем обработчик события SpinDown.


     BeforeChange: OnBeforeChange,//Добавляем обработчик события BeforeChange.


     AfterChange: OnAfterChange});//Добавляем обработчик события AfterChange.


SE.setFocus();//Устанавливаем
 фокус компоненту.


function spinUp(sender, args)//Обработчик события
 SpinUp.


{


    var
 i = parseInt(SE.getContent());


    if
 (!isNaN(i))


    {


          i
 += 10;


          SE.setContent(i.toString())


    }


     args.IsSpinUp
 = true;


}


function spinDown(sender,
 args)//Обработчик события SpinDown.


{


var i = parseInt(SE.getContent());


    if
 (!isNaN(i))


    {


           i
 += -10;


           SE.setContent(i.toString())


    }


     args.IsSpinUp
 = false;


}


function OnAfterChange(sender, args)//Обработчик
 события AfterChange.


{


  var i = parseInt(args.NewValue);


  if (!isNaN(i)
 && i.toString() == args.NewValue)


  {


   if
 (i > 1000 || i < -1000)


  SE._applyNotValidCSS();//Появление индикатора некорректного ввода
 при вводе числового //значения больше или меньше 1000.


  else


       SE._applyValidCSS();


  }


  else


       SE._applyNotValidCSS();//Появление индикатора некорректного ввода
 при вводе //не числового значения.


}


function OnBeforeChange(sender, args)//Обработчик
 события BeforeChange.


{


  if (args.NewValue
 == "100")


  args.Cancel
 = true;


}


</script>


После выполнения примера на html-странице будет размещено поле ввода
 с кнопками прокрутки:


![](spinedit1_1.gif)


В поле ввода установлен курсор - это результат использования метода
 [SpinEdit.setFocus](dhtmlCommon.chm::/Classes/SpinEdit/SpinEdit.setFocus.htm).


Введите в поле ввода число. При нажатии кнопок прокрутки или клавиш
 UP/DOWN значение в поле ввода будет уменьшаться/увеличиваться на
 10 (результат выполнения функций spinDown и spinUp).


Если ввести в редактор текстовое значение или числовое значение больше
 или меньше 1000, то загорится индикатор некорректного ввода (результат
 выполнения функции OnAfterChange).


В созданном компоненте не допускается ввод значения 100 (результат выполнения
 функции OnBeforeChange).


См. также:


[SpinEdit](SpinEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
