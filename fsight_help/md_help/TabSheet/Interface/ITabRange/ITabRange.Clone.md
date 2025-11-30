# ITabRange.Clone

ITabRange.Clone
-


# ITabRange.Clone


## Синтаксис


Clone: [ITabRange](ITabRange.htm);


## Описание


Метод Clone создает копию диапазона
 ячеек.


## Комментарии


При вызове данного метода будет создан новый диапазон ячеек. Для нового
 диапазона будут скопированы и установлены свойства, являющиеся общими
 для исходного диапазона.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент TabSheetBox с идентификатором
 «TabSheetBox1» и компонент UiTabSheet с идентификатором «UiTabSheet1».
 Укажите «UiTabSheet1» в качестве источника данных для компонента «TabSheetBox1».


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TSheet: ITabSheet;

    r, r1: ITabRange;

Begin

    TSheet := UiTabSheet1.TabSheet;

    r := TSheet.View.Selection.Range;

    r1 := r.Clone;

    Debug.WriteLine("Адрес выделенного диапазона ячеек: " + r1.Address);

End Sub Button1OnClick;


При нажатии на кнопку в переменной «r1» будет содержаться копия выделенного
 диапазона, в окно консоли будет выведен адрес выделенного диапазона ячеек.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
