# IDimensionViewer.GetItemAt

IDimensionViewer.GetItemAt
-


# IDimensionViewer.GetItemAt


## Синтаксис


GetItemAt(Pt: [IPoint](ModForms.chm::/Interface/IPoint/IPoint.htm);
 [FullRow: Boolean = False]): Integer;


## Параметры


Pt. Точка, в которой нужно
 получить элемент компонента;


FullRow. Область, в которой
 производится проверка наличия элемента.


## Описание


Метод GetItemAt осуществляет
 проверку наличия элемента в заданной точке клиентской области компонента.


## Комментарии


Если точка Pt попадает в область
 элемента, то метод вернёт индекс этого элемента, иначе метод вернёт значение
 «-1».


По умолчанию в параметре FullRow
 передается значение False, при
 этом областью элемента считается только та область, которую занимает пиктограмма
 и текст элемента (текст во всех столбцах, если свойству [IDimensionViewer.ShowColumnHeaders](IDimensionViewer.ShowColumnHeaders.htm)
 установлено значение True).


При установке параметру FullRow
 значения True областью элемента
 будет считаться вся строка, в которой он расположен: область отступа и
 экспандера, пиктограмма, текст элемента (текст во всех столбцах) и свободная
 область справа от текста.


Примечание.
 Метод GetItemAt не поддерживается
 компонентом [DimensionCombo](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DimensionCombo.htm),
 который является наследником интерфейса [IDimensionViewer](IDimensionViewer.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента DimensionTree с наименованием «DimensionTree1» и какого-либо
 источника данных для «DimensionTree1». Указанная процедура установлена
 в качестве обработчика события OnMouseMove компонента «DimensionTree1».


	Sub DimensionTree1OnMouseMove(Sender: Object; Args: IMouseEventArgs);

	Var

	    DimInst: IDimInstance;

	    Node: Integer;

	Begin

	    Node := DimensionTree1.GetItemAt(Args.pPoint, True);

	    If Node > -1 Then

	        DimInst := DimensionTree1.Dimension.DimInstance;

	        Self.Text := DimInst.Elements.Name(Node);

	    End If;

	End Sub DimensionTree1OnMouseMove;


При выполнении примера будет отслеживаться положение курсора мыши в
 области компонента «DimensionTree1». Если курсор находится над строкой,
 в которой есть элемент, то текст элемента будет выведен в заголовок формы.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
