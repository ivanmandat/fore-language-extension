# BorderCombo.ModeChanged

BorderCombo.ModeChanged
-


# BorderCombo.ModeChanged


## Синтаксис


ModeChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ModeChanged наступает при смене режима отображения раскрывающаяся панели для выбора типа границы.


## Комментарии


Переключение режимов происходит при нажатии на кнопки, которые определены в полях _mode1Btn и _mode2Btn.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [BorderCombo](../../Components/BorderCombo/BorderCombo.htm) с наименование «bc» (см. «[Пример создания компонента BorderCombo](../../Components/BorderCombo/BorderCombo_example.htm)»). Добавим обработчик события ModeChanged:


bc.ModeChanged.add(function (sender, args){alert ("Mode was changed")})


После выполнения примера при смене режима выбора типа границы на экран будет выводиться сообщение «Mode was changed».


См. также:


[BorderCombo](BorderCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
