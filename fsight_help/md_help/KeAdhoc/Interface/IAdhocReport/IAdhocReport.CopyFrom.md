# IAdhocReport.CopyFrom

IAdhocReport.CopyFrom
-


# IAdhocReport.CopyFrom


## Синтаксис


CopyFrom(pSource: [IAdhocReport](IAdhocReport.htm));


## Параметры


pSource. Копируемая аналитическая
 панель.


## Описание


Метод CopyFrom копирует
 параметры указанной аналитической панели в текущую панель.


## Комментарии


Параметр pSource не может
 принимать значение Null.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD_EXPORT».


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    MObjSrc, MOdjDest: IMetabaseObject;

    DashboardSrc, DashboardDest: IAdhocReport;

    CrInfo: IMetabaseObjectCreateInfo;

Begin

    MB := MetabaseClass.Active;

    // Получаем копируемую аналитическую панель

    MObjSrc := MB.ItemById("DASHBOARD_EXPORT").Bind;

    DashboardSrc := MObjSrc As IAdhocReport;

    // Создаем новую аналитическую панель

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_ADHOC_REPORT;

    CrInfo.Id := MB.GenerateId("DASHBOARD");

    CrInfo.Name := "Аналитическая панель";

    CrInfo.Parent := MObjSrc.Parent;

    MOdjDest := MB.CreateObject(CrInfo).Edit;

    DashboardDest := MOdjDest As IAdhocReport;

    // Копируем все параметры аналитической панели

    // DASHBOARD_EXPORT в новую аналитическую панель

    DashboardDest.CopyFrom(DashboardSrc);

    // Сохраняем изменения

    MOdjDest.Save;

End Sub UserProc;


В результате выполнения примера будет создана новая аналитическая панель.
 Все параметры созданной панели будут скопированы из аналитической панели
 «DASHBOARD_EXPORT».


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
