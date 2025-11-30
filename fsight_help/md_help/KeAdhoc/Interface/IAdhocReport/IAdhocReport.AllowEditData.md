# IAdhocReport.AllowEditData

IAdhocReport.AllowEditData
-


# IAdhocReport.AllowEditData


## Синтаксис


AllowEditData: Boolean;


## Описание


Свойство AllowEditData определяет,
 разрешено ли редактирование данных в визуализаторе «[Таблица](UiAdhoc.chm::/Blocks/Gadgets/Table.htm)».


## Комментарии


Допустимые значения:


	- True. В визуализаторе
	 «Таблица» разрешено редактирование
	 данных. Для сохранения измененных данных используйте метод [IAdhocReport.SaveData](IAdhocReport.SaveData.htm);


	- False. В визуализаторе
	 «Таблица» запрещено редактирование
	 данных.


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «DASHBOARD».


Добавьте ссылки на системные сборки: Adhoc, Metabase.


			Sub SubAllowEditData;

Var

    mb: IMetabase;

    DashboardObj: IMetabaseObject;

    Dashboard: IAdhocReport;

Begin

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    DashboardObj := mb.ItemById("DASHBOARD").Edit;

    Dashboard := DashboardObj As IAdhocReport;

    // Если редактирование данных запрещено, то разрешаем его

    If Not Dashboard.AllowEditData Then

        Dashboard.AllowEditData := True;

    End If;

    // Сохраняем изменения

    DashboardObj.Save;

End Sub SubAllowEditData;


В результате выполнения примера в аналитической панели будет разрешено
 редактирование данных в визуализаторе «Таблица».


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
