# IMetaRdsExportSchema.RemoveMapping

IMetaRdsExportSchema.RemoveMapping
-


# IMetaRdsExportSchema.RemoveMapping


## Синтаксис


RemoveMapping(Index: Integer): Boolean;


## Параметры


Index. Индекс привязки.


## Описание


Метод RemoveMapping удаляет
 привязку атрибута к полю источника данных.


## Комментарии


Если удаление прошло успешно, то метод возвращает значение True.


## Пример


Пример является процедурой с одним входным параметром:


	- sExport. Объект, содержащий
	 параметры экспорта данных из справочника НСИ.


Добавьте ссылку на системную сборку Rds.


	Sub clearMapping(sExport: IMetaRdsExportSchema);

	Var

	    i, mc: Integer;

	    attrMap: IRdsExportSchemaAttribute;

	Begin

	    mc := sExport.MappingsCount;

	    For i := 0 To mc - 1 Do

	        attrMap := sExport.ItemMapping(0);

	        If sExport.RemoveMapping(0) Then

	            Debug.WriteLine("Привязка атрибута '"

	                + attrMap.Attribute.Id + "' удалена");

	        End If;

	    End For;

	End Sub clearMapping;


После выполнения примера в объекте sExport
 будут удалены привязки всех атрибутов к полям источника данных.
 Наименования атрибутов будут выведены в окно консоли.


См. также:


[IMetaRdsExportSchema](IMetaRdsExportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
