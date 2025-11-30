# IEtlBox.GetShapeByPt

IEtlBox.GetShapeByPt
-


# IEtlBox.GetShapeByPt


## Синтаксис


GetShapeByPt(Pt: [IGxPoint](ModDrawing.chm::/Interface/IGxPoint/IGxPoint.htm)):
 [IWxShape](Andy.chm::/Interface/IWxShape/IWxShape.htm);


## Параметры


Pt. Координаты точки, находящейся
 в пределах фигуры, информацию о которой необходимо получить.


## Описание


Метод GetShapeByPt позволяет
 получить информацию о фигуре по экранным координатам точки, которая находится
 в пределах фигуры.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, расположенной
 на ней кнопки с наименованием «Button1», компонентов UiEtlObject
 с наименованием «UiEtlObject1» и EtlBox
 с наименованием «EtlBox1». «UiEtlObject1» установлен в качестве источника
 для «EtlBox1». К «UiEtlObject1» подключена какая-либо задача ETL.


Добавьте ссылки на системные сборки: Drawing, ETL.


	Sub EtlBox1OnMouseDown(Sender: Object; Args: IMouseClickEventArgs);

	Var

	    Pt: IGxPoint;

	    Shape: IWxShape;

	Begin

	    Pt := Args.pPoint As IGxPoint;

	    Shape := EtlBox1.GetShapeByPt(Pt);

	    If Shape <> Null Then

	        Self.Text := Shape.Id;

	    End If;

	End Sub EtlBox1OnMouseDown;


В результате выполнения примера при наведении курсора на рабочую область
 задачи ETL и щелчке мышью, если курсор был наведён на какую-либо фигуру,
 то в заголовок формы будет выведен идентификатор этой фигуры.


См. также:


[IEtlBox](IEtlBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
