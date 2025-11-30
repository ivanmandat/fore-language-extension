# Combo.getMaskEdit

Combo.getMaskEdit
-


# Combo.getMaskEdit


## Синтаксис


getMaskEdit();


## Описание


Метод getMaskEdit возвращает редактор ввода данных, соответствующих определенному шаблону.


## Комментарии


Метод используется вместе со свойствами [Combo.UseMask](Combo.UseMask.htm) и [Combo.EnableEdit](Combo.EnableEdit.htm).


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Разместим на html-странице компонент [Combo](../../Components/Combo/Combo.htm) и установим для него редактор маски для ввода даты.


<script type="text/javascript">


    var Combo = new PP.Ui.Combo({


        ParentNode: document.getElementById("Combo1"),


        EnableEdit: true,


        Width: 100,


        UseMask: true});


    var MaskEdit = Combo.getMaskEdit();


        MaskEdit.setRegExpContent("^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\\.(0[1-9]|1[0-2])\\.(19\\d+|20\\d+)$");//Регулярное выражение для маски.


        MaskEdit.setMask("__.__.____");//Шаблон для ввода данных.


</script>


После выполнения примера в строке ввода будет установлен редактор для ввода даты:


![](../../Components/Combo/Combo3.gif)


Если значение введено корректно (соответствует регулярному выражению), то исчезает цветовой индикатор некорректного ввода:


![](../../Components/Combo/Combo4.gif)


См. также:


[Combo](Combo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
