# IRibbonFloatEdit.MaxValue

IRibbonFloatEdit.MaxValue
-


# IRibbonFloatEdit.MaxValue


## Синтаксис


MaxValue: Double;


## Описание


Свойство MaxValue определяет
 максимальное значение, которое можно будет установить в редакторе.


## Комментарии


Если MaxValue = [MinValue](IRibbonFloatEdit.MinValue.htm) = 0,
 то максимальное значение ограничено максимальным значением, доступным
 для типа данных Double.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента Ribbon
 с наименованием «Ribbon1». На ленте компонента «Ribbon1» создана вкладка
 и панель.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    RPanel: IRibbonPanel;

    RFEdit: IRibbonFloatEdit;

Begin

    RPanel := Ribbon1.ActiveCategory.Panels.Item(0);

    RFEdit := New RibbonFloatEdit.Create;

    RPanel.Elements.Add(RFEdit);

    RFEdit.MinValue := -100;

    RFEdit.MaxValue := 100;

    RFEdit.Precision := 2;

    RFEdit.Value := 50;

End Sub Button1OnClick;


При нажатии на кнопку на панели ленты будет создан редактор вещественных
 чисел. Для редактора будут настроены основные параметры.


См. также:


[IRibbonFloatEdit](IRibbonFloatEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
