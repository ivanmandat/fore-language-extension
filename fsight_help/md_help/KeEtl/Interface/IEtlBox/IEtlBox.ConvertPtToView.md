# IEtlBox.ConvertPtToView

IEtlBox.ConvertPtToView
-


# IEtlBox.ConvertPtToView


## Синтаксис


ConvertPtToView(Pt: [IGxPoint](ModDrawing.chm::/Interface/IGxPoint/IGxPoint.htm)):
 [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm);


## Параметры


Pt. Экранные координаты точки,
 по которым необходимо получить координаты в рабочей области компонента.


## Описание


Метод ConvertPtToView позволяет
 получить координаты точки в рабочей области по экранным координатам точки.


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

	    PtF: IGxPointF;

	    x, y: Double;

	Begin

	    Pt := Args.pPoint As IGxPoint;

	    PtF := EtlBox1.ConvertPtToView(Pt);

	    x := PtF.X;

	    y := PtF.Y;

	End Sub EtlBox1OnMouseDown;


В результате выполнения примера при щелчке мышью по компоненту в переменные
 X и Y будут записаны координаты рабочей области задачи ETL, где был осуществлён
 щелчок.


См. также:


[IEtlBox](IEtlBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
