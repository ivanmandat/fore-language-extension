# IWxWorkspace.StickyShapes

IWxWorkspace.StickyShapes
-


# IWxWorkspace.StickyShapes


## Синтаксис


		StickyShapes: Boolean;


## Описание


Свойство StickyShapes определяет
 скреплять ли объекты с линиями по соединительным точкам.


## Комментарии


Свойство предназначено для использования в регламентном отчете. Значение
 свойства не сохраняется.


Допустимые значения:


	- True. Объекты скрепляются
	 с линиями по соединительным точкам. Это позволяет перемещать фигуры
	 без потери связи с соединительными линиями;


	- False. Объекты не скрепляются
	 с линиями по соединительным точкам.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «REPORT_STICKYSHAPES», содержащего на активном
 листе только две фигуры.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase, Report,
 Tab.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    Report: IPrxReport;

		    Tab: ITabSheet;

		    Objects: ITabObjects;

		    Shape1, Shape2, Link: IWxShape;

		    WSP: IWxWorkspace;

		    PrxShape: IPrxShape;

		    Placement: IGxRectF;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем регламентный отчёт

		    Report := mb.ItemById("REPORT_STICKYSHAPES").Edit As IPrxReport;

		    // Получаем активный лист отчета

		    Tab := (Report.ActiveSheet As IPrxTable).TabSheet;

		    // Получаем коллекцию объектов отчета

		    Objects := Tab.Objects;

		    // Получаем первый объект

		    Shape1 := (Objects.Item(0) As IPrxShape) As IWxShape;

		    // Получаем рабочее пространство, к которому относится объект

		    WSP := Shape1.Workspace;

		    // Разрешаем крепление объектов по соединительным точкам

		    WSP.StickyShapes := True;

		    // Получаем второй объект

		    Shape2 := (Objects.Item(1) As IPrxShape) As IWxShape;

		    // Создаем линию

		    Placement := New GxRectF.Create(20, 20, 50, 50);

		    PrxShape := Objects.Add("PrxShape", Placement) As IPrxShape;

		    PrxShape.Type := PrxShapeType.StraightLink;

		    Link := PrxShape As IWxShape;

		    // Соединяем два объекта с помощью линии

		    WSP.GlueConnectionPoints(Shape1, 1, Link, 0);

		    WSP.GlueConnectionPoints(Shape2, 0, Link, 1);

		    // Сохраняем отчет

		    (Report As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера две фигуры в регламентном отчете будут
 соединены линией по соединительным точкам.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
