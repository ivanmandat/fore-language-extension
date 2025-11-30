# IRdsDictionaryBox.SelectionMode

IRdsDictionaryBox.SelectionMode
-


# IRdsDictionaryBox.SelectionMode


## Синтаксис


SelectionMode: [SelectionModeType](ModForms.chm::/Enums/SelectionModeType.htm);


## Описание


Свойство SelectionMode определяет
 режим отметки элементов в компоненте.


## Комментарии


По умолчанию используется режим множественной отметки: [SelectionModeType](ModForms.chm::/Enums/SelectionModeType.htm).MultiSelectStandard.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1»,
 компонента RdsDictionaryBox с
 наименованием «RdsDictionaryBox1»
 и компонента UiRdsDictionary,
 являющегося источником данных для «RdsDictionaryBox1».
 Пример является обработчиком события OnClick
 для кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    RdsDictionaryBox1.SelectionMode := SelectionModeType.SingleSelect;

	End Sub Button1OnClick;


После выполнения примера в компоненте «RdsDictionaryBox1»
 будет включен режим единичной отметки.


См. также:


[IRdsDictionaryBox](IRdsDictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
