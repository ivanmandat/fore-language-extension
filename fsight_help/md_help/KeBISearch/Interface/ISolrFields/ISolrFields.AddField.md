# ISolrFields.AddField

ISolrFields.AddField
-


# ISolrFields.AddField


## Синтаксис


AddField(Id: String; Type: [SolrFieldType](../../Enums/SolrFieldType.htm)):
 [ISolrField](../ISolrField/ISolrField.htm);


## Параметры


Id. Идентификатор добавляемого
 поля.


Type. Тип добавляемого поля.


## Описание


Метод AddField добавляет поле
 в коллекцию в соответствии с указанными параметрами.


## Комментарии


Список полей, которые используются при индексации и поиске, определяется
 в конфигурационном файле. В виду отсутствия прямого доступа к конфигурационным
 файлам Apache Solr из Fore для
 изменения списка полей необходимо отредактировать файлы вручную. Более
 подробно об изменении списка читайте в подразделе «[Системные и пользовательские поля](Setup.chm::/BISearch/Desktop_application_setting.htm#fields)».


Метод AddField используется
 если известны параметры необходимых пользовательских полей и они еще отсутствуют
 в настройках поискового сервиса.


Для автоматической синхронизации списка полей в настройках экземпляра
 Solr в соответствии с конфигурационным файлом используйте метод [ISolrSearchEngineSchema.FillSchemaOptions](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.FillSchemaOptions.htm).


## Пример


Пример использования приведён в описании свойства [ISolrSearchEngineSchema.Fields](../ISolrSearchEngineSchema/ISolrSearchEngineSchema.Fields.htm).


См. также:


[ISolrFields](ISolrFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
