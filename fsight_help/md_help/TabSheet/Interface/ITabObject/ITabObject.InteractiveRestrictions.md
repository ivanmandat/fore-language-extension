# ITabObject.InteractiveRestrictions

ITabObject.InteractiveRestrictions
-


# ITabObject.InteractiveRestrictions


## Синтаксис


InteractiveRestrictions: [TabObjectInteractiveRestrictions](../../Enums/TabObjectInteractiveRestrictions.htm);


## Описание


Свойство InteractiveRestrictions
 определяет режимы перемещения и изменения размера, которые недоступны
 для объекта.


## Комментарии


По умолчанию свойство имеет значение TabObjectInteractiveRestrictions.None,
 то есть на перемещение и изменение размера объекта не накладывается
 никаких ограничений.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчета с идентификатором «TAB_REPORT».


Добавьте ссылки на системные сборки: Drawing, Metabase, Report, Tab.


			Sub UserProc;

Var

    mb: IMetabase;

    Report: IPrxReport;

    Sheet: IPrxTable;

    TObj: ITabObjects;

    Placement: IGxRectF;

    Object: ITabObject;

    Size:IGxSizeF;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем регламентный отчет

    Report := MB.ItemById("TAB_REPORT").Edit As IPrxReport;

    // Получаем первый лист в отчете

    Sheet := Report.Sheets.Item(0) As IPrxTable;

    // Удаляем все объекты, расположенные на листе отчета

    TObj := Sheet.TabSheet.Objects;

    TObj.Clear;

    // Добавляем новую автофигуру

    Placement:=New GxRectF.Create(10,10,10,10);

    Object := TObj.Add("PrxShape", Placement);

    Size:=New GxSizeF.Create(50,50);

    Object.Size:=Size;

    // Запрещаем перемещать данный объект по вертикали и запрещаем изменять размер объекта снизу

    Object.InteractiveRestrictions := TabObjectInteractiveRestrictions.MoveVertical Or

        TabObjectInteractiveRestrictions.ResizeBottom;

    // Сохраняем измерения

    (Report As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера на первый лист отчета будет добавлена
 автофигура, для которой будет запрещено перемещение по вертикали и изменение
 размера путём перемещения нижней границы.


См. также:


[ITabObject](ITabObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
