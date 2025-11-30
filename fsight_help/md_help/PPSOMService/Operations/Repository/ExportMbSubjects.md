# ExportMbSubjects: Операция

ExportMbSubjects: Операция
-


**


# ExportMbSubjects


## Синтаксис


ExportMbSubjectsResult ExportMbSubjects(MbId tMbSec,
 ExportMbSubjectsArg tArg)


## Параметры


tMbSec. Моникёр
 соединения с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция ExportMbSubjects экспортирует
 список пользователей в CSV-файл.


## Комментарии


Для выполнения операции укажите в поле tMbSec
 моникёр соединения с репозиторием. Моникёр может быть получен при выполнении
 операции [OpenMetabase](OpenMetabase.htm). В поле tArg
 указывается пустое значение, поле зарезервировано на будущее.


При выполнении операции будет создан CSV-файл, в который будет загружен
 список пользователей и различная информация о них. Файл будет сохранён
 в хранилище BI-сервера.


Результатом операции будет моникёр файла в хранилище BI-сервера. Данный
 моникёр может использоваться операциями [GetBin](../../Additional/GetBin.htm)/GetBinary
 для доступа к файлу.


## Пример


Ниже приведён пример экспорта списка пользователей в CSV-файл. В запросе
 передаётся моникёр соединения с репозиторием. В ответе возвращается моникёр
 полученного файла в хранилище BI-сервера.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ExportMbSubjects xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbSec xmlns="****">
  <id>OIPILNNNDDGEGOAEOALKEFLHNOFDFONEDKFAICJIEKEHOLAE!M</id>  </tMbSec>
  <tArg xmlns="****" />
  </ExportMbSubjects>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<ExportMbSubjectsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>OIPILNNNDDGEGOAEOALKEFLHNOFDFONEDKFAICJIEKEHOLAE!M</id>  </id>
[![](../../minus.gif)](../../#)<exportedSubjects xmlns="****">
  <id>OIPILNNNDDGEGOAEOALKEFLHNOFDFONEDKFAICJIEKEHOLAE!M!Bin!0</id>  </exportedSubjects>
  </ExportMbSubjectsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ExportMbSubjects" :
  {
   "tMbSec" :
    {
     "id" : "OIPILNNNDDGEGOAEOALKEFLHNOFDFONEDKFAICJIEKEHOLAE!M"
    },
   "tArg" : ""
  }
}

### JSON-ответ:


{
 "ExportMbSubjectsResult" :
  {
   "id" :
    {
     "id" : "OIPILNNNDDGEGOAEOALKEFLHNOFDFONEDKFAICJIEKEHOLAE!M"
    },
   "exportedSubjects" :
    {
     "id" : "OIPILNNNDDGEGOAEOALKEFLHNOFDFONEDKFAICJIEKEHOLAE!M!Bin!0"
    }
  }
}


public static ExportMbSubjectsResult ExportMbSubjects(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new ExportMbSubjects()
    {
        tArg = new ExportMbSubjectsArg(),
        tMbSec = new MbId() { id = moniker }
    };
    // Экспорт списка пользователей
    var result = somClient.ExportMbSubjects(tGet);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
