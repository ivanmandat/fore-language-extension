# ColorCombo.ColorChange

ColorCombo.ColorChange
-


# ColorCombo.ColorChange


## Синтаксис


ColorChange: function (sender,args)


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие ColorChange наступает
 при изменении цвета после закрытия раскрывающегося списка.


## Пример


Для выполнения примера создайте компонент [ColorCombo](../../Components/ColorCombo/ColorCombo.htm)
 с наименованием «ColCombo»(см. «[Пример
 создания компонента ColorCombo](../../Components/ColorCombo/Example_ColorCombo.htm)»). Добавим обработчик события ColorChange:


    ColCombo.ColorChange.add(function (sender, args) {
        var col = ColCombo.getColor();
        console.log(
            "Прозрачность: " + col.getA(),
            "; Синий: " + col.getB(),
            "; Красный: " + col.getR(),
            "; Зеленый: " + col.getG(),
            "; Яркость: " + col.getV(),
            "; Тон : " + col.getH(),
            "; Насыщенность : " + col.getS()
            )
    });

После выполнения примера при выборе нового цвета в javascript-консоль
 браузера будет выдаваться сообщение с текущими [характеристиками
 цвета](dhtmlCommon.chm::/Classes/pp/color/color.htm).


См. также:


[ColorCombo](ColorCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
