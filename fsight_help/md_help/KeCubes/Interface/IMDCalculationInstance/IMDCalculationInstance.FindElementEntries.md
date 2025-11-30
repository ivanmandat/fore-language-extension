# IMDCalculationInstance.FindElementEntries

IMDCalculationInstance.FindElementEntries
-


# IMDCalculationInstance.FindElementEntries


## Синтаксис


FindElementEntries(ElementKey: [IMDCalculationFormulaElementKey](../IMDCalculationFormulaElementKey/IMDCalculationFormulaElementKey.htm)):
 [IMDCalculationFormulasIterator](../IMDCalculationFormulasIterator/IMDCalculationFormulasIterator.htm);


## Параметры


ElementKey. Ключ
 элемента, который будет использован для поиска вхождений элемента в формулы.


## Описание


Метод FindElementEntries осуществляет
 поиск вхождений элемента в формулы.


## Комментарии


Если поиск прошел удачно, то метод возвращает итератор по формулам,
 в которые входит элемент. Если вхождений не обнаружено, то метод вернет
 значение Null.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и текстовый редактор с наименованием
 Memo1. Также в репозитории должен существовать многомерный расчет с идентификатором
 OBJMD.


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        MB: IMetabase;

        MDInst: IMDCalculationInstance;

        Source: IMDCalculationSourceInstance;

        Slices: IMDCalculationSlicesInstance;

        Slice: IMDCalculationSliceInstance;

        Coord: IMatrixCoord;

        SourceElKey: IMDCalculationFormulaElementKey;

        Iterator: IMDCalculationFormulasIterator;

        i, j: Integer;

    Begin

        MB := MetabaseClass.Active;

        MDInst := MB.ItemById("OBJMD").Open(Null) As IMDCalculationInstance;

        Source := MDInst.Sources.Item(0);

        Slices := Source.Slices;

        Coord := Source.NewCoord;

        //Во всех измерениях выбираем первые элементы

        For i := 0 To Slices.Count - 1 Do

            Slice := Slices.Item(i);

            Coord.Item(i) := 0;

            Memo1.Lines.Add("В " + Slice.Name + " отмечен элемент " + Slice.Dimension.Elements.Name(Coord.Item(i)));

        End For;

        SourceElKey := Source.CoordToKey(Coord);

        SourceElKey.FactIndex := 0;

        Iterator := MDInst.FindElementEntries(SourceElKey);

        j := 0;

        While Not Iterator.Eof Do

            j := j + 1;

            Memo1.Lines.add("факт: " + Iterator.Key.FactIndex.ToString);

            Iterator.Next;

        End While;

        Memo1.Lines.add("Количество вхождений по координате: " + j.ToString);

    End Sub Button1OnClick;


При нажатии кнопки в текстовый редактор будет выведена информация о
 координате, выведен индекс факта, по которому записана формула, указано
 количество формул, в которые входит координата.


См. также:


[IMDCalculationInstance](IMDCalculationInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
