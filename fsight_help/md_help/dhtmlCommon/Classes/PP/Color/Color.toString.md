# Color.toString

Color.toString
-


# Color.toString


## Синтаксис


toString(includeAlpha)


## Параметры


includeAlpha. Определяет,
 выводится ли значение [прозрачности](Color.getOpacity.htm).


## Описание


Метод toString возвращает строку
 со значением цвета в шестнадцатиричном формате со знаком решетки в начале.


## Комментарии


Если для параметра задано значение true,
 то строка будет иметь вид «#FFFFFFFF», где компоненты расположены в следующем
 порядке: [A](Color.A.htm), [R](Color.R.htm), [G](Color.G.htm), [B](Color.B.htm).


Если для параметра установлено значение false
 (по умолчанию), строка будет иметь вид «#FFFFFF».Компоненты расположены
 в том же порядке, но без [A](Color.A.htm).


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [ColorCombo](dhtmlUi.chm::/components/colorcombo/colorcombo.htm)
 с наименованием «colCombo» (см. «[Пример
 создания компонента ColorCombo](dhtmlUi.chm::/components/colorcombo/example_colorcombo.htm)»). Добавим обработчик события [ColorCombo.ColorChanged](dhtmlUi.chm::/Classes/colorcombo/colorcombo.colorchanged.htm):


colCombo.ColorChanged.add(function (sender, args) {
    var col = colCombo.getColor();
    console.log(col.toString(true), +" / " +
        col.toDecimalString(false))
});
После выполнения примера при смене цвета в компоненте [ColorCombo](dhtmlUi.chm::/components/colorcombo/colorcombo.htm)
 в javascript-консоль браузера будут выдаваться строки со значением цвета
 в разных форматах, например, для текущего красного цвета будет выведено:
 «#FFFF0000 / rgb(255, 0, 0)».


См. также:


[Color](Color.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
