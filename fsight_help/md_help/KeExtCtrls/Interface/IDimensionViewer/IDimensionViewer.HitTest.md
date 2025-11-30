# IDimensionViewer.HitTest

IDimensionViewer.HitTest
-


# IDimensionViewer.HitTest


## Синтаксис


HitTest(Pt: [IPoint](ModForms.chm::/Interface/IPoint/IPoint.htm);
 Var Hit: [HitTestResult](ModForms.chm::/Enums/HitTestResult.htm)):
 Integer;


## Параметры


Pt. Точка, в которой нужно
 получить элемент компонента;


Hit. Параметр,
 в котором будет содержаться дополнительная информация после выполнения
 метода.


## Описание


Метод HitTest осуществляет проверку
 наличия элемента в заданной точке клиентской области компонента и возвращает
 результат проверки.


## Комментарии


Метод HitTest является расширением
 метода [IDimensionViewer.GetItemAt](IDimensionViewer.GetItemAt.htm).


Если точка Pt попадает в область
 элемента (учитываются только пиктограмма и текст элемента в любом столбце),
 то метод вернёт индекс этого элемента, иначе метод вернёт значение «-1».
 Также в переменной, которая будет передана в качестве параметра Hit, будет содержаться область
 компонента, в которую попадает точка Pt.


Примечание.
 Метод GetItemAt не поддерживается
 компонентом [DimensionCombo](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DimensionCombo.htm),
 который является наследником интерфейса [IDimensionViewer](IDimensionViewer.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента DimensionTree с наименованием «DimensionTree1» и какого-либо
 источника данных для «DimensionTree1». Указанная процедура установлена
 в качестве обработчика события OnMouseDown компонента «DimensionTree1».


	Sub DimensionTree1OnMouseDown(Sender: Object; Args: IMouseClickEventArgs);

	Var

	    DimInst: IDimInstance;

	    Node: Integer;

	    Result: HitTestResult;

	    s: String;

	Begin

	    Node := DimensionTree1.HitTest(Args.pPoint, Result);

	    Select Case Result

	        Case HitTestResult.Nowhere: s := "Nowhere";

	        Case HitTestResult.OnItemIcon: s := "OnItemIcon";

	        Case HitTestResult.OnItemLabel: s := "OnItemLabel";

	        Case HitTestResult.OnItemIndent: s := "OnItemIndent";

	        Case HitTestResult.OnItemButton: s := "OnItemButton";

	        Case HitTestResult.OnItemRight: s := "OnItemRight";

	        Case HitTestResult.OnItemStateIcon: s := "OnItemStateIcon";

	        Case HitTestResult.Above: s := "Above";

	        Case HitTestResult.Below: s := "Below";

	        Case HitTestResult.ToLeft: s := "ToLeft";

	        Case HitTestResult.ToRight: s := "ToRight";

	    End Select;

	    If Node > -1 Then

	        DimInst := DimensionTree1.Dimension.DimInstance;

	        s := DimInst.Elements.Name(Node) + '(' + s + ')';

	    End If;

	    Self.Text := s;

	End Sub DimensionTree1OnMouseDown;


При щелчке мышью в области компонента «DimensionTree1» будет осуществляться
 проверка наличия в этой области какого-либо элемента. Область компонента
 и текст элемента, если он имеется в этой области, будут выведены в заголовок
 формы.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
