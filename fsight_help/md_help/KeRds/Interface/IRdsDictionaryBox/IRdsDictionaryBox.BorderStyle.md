# IRdsDictionaryBox.BorderStyle

IRdsDictionaryBox.BorderStyle
-


# IRdsDictionaryBox.BorderStyle


## Синтаксис


BorderStyle: [ControlBorderStyle](ModForms.chm::/Enums/ControlBorderStyle.htm);


## Описание


Свойство BorderStyle определяет
 стиль границы компонента.


## Комментарии


Значение по умолчанию ControlBorderStyle.Single
 (компонент имеет объемный вид).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 UiRdsDictionary с загруженным
 справочником НСИ.


			Sub UserProc;

Var

    RdsDict: RdsDictionaryBox;

Begin

    UiRdsDictionary1.Active := False;

    RdsDict := New RdsDictionaryBox.Create;

    RdsDict.BorderStyle := ControlBorderStyle.Flat;

    Debug.WriteLine("Индекс пиктограммы: " + RdsDict.RootImageIndex.ToString);

    RdsDict.Source := UiRdsDictionary1 As IRdsDictionarySource;

    RdsDict.RootImageIndex := 44;

    RdsDict.Parent := self;

    RdsDict.Width := self.Width - 50;

    RdsDict.Height := self.Height - 50;

    UiRdsDictionary1.Active := True;

End Sub UserProc;


После выполнения примера на форму будет добавлен компонент RdsDictionaryBox.
 Для него заданы: источник данных, индекс пиктограммы корневого элемента,
 стиль границы, ширина и высота. Индекс пиктограммы, используемой по умолчанию,
 будет выведен в окно консоли.


См. также:


[IRdsDictionaryBox](IRdsDictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
