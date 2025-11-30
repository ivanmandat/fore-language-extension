# IAdhocReport.Refresh

IAdhocReport.Refresh
-


# IAdhocReport.Refresh


## Синтаксис


Refresh(Value: Object);


## Параметры


Value. Источник данных, который
 надо обновить.


## Описание


Метод Refresh обновляет
 указанные источники данных аналитической панели.


## Комментарии


Параметр Value может принимать
 следующие значения:


	- Null. Будут обновлены
	 все источники данных аналитической панели;


	- Объект интерфейса [IAdhocDataSourceObject](../IAdhocDataSourceObject/IAdhocDataSourceObject.htm).
	 Будет обновлен указанный источник данных;


	- Объект интерфейса [IAdhocDataSourceObjects](../IAdhocDataSourceObjects/IAdhocDataSourceObjects.htm).
	 Будет обновлена указанная коллекция источников данных;


	- Динамический массив [IArrayList](ModCollections.chm::/Interface/IArrayList/IArrayList.htm), содержащий
	 объекты интерфейса [IAdhocDataSourceObject](../IAdhocDataSourceObject/IAdhocDataSourceObject.htm).
	 Будет обновлен массив указанных источников данных.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- DashboardDocumentViewerBox
	 с идентификатором «DashboardDocumentViewerBox1»;


	- UiDashboard с идентификатором
	 «UiDashboard1», содержащий загруженную аналитическую панель и являющийся
	 источником данных для «DashboardDocumentViewerBox1».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    Dashboard: IAdhocReport;

    DashboardDS: IAdhocDataSourceObjects;

Begin

    // Получаем аналитическую панель

    Dashboard := UiDashboard1.Object.Bind As IAdhocReport;

    // Получаем источники данных аналитической панели

    DashboardDS := Dashboard.DataSourceObjects;

    // Удаляем первый
 из источников данных

    DashboardDS.Remove(0);

    // Обновляем оставшиеся источники

    Dashboard.Refresh(DashboardDS);

End Sub UserProc;


В результате выполнения примера будут обновлены все источники данных
 аналитической панели, кроме первого источника.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
