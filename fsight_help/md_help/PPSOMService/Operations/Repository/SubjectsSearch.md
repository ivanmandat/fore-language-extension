# SubjectsSearch: Операция

SubjectsSearch: Операция
-


**


# SubjectsSearch


## Синтаксис


MbSubjectsSearchResult SubjectsSearch(MbId tMbSec,
 MbSubjectsSearch tArg)


## Параметры


tMbSec. Моникёр
 соединения с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция SubjectsSearch осуществляет
 поиск субъектов безопасности.


## Комментарии


Операция позволяет производить поиск и получать информацию о пользователях
 или группах пользователей, которые могут быть созданы в менеджере безопасности
 репозитория, на сервере СУБД или в службе каталогов Active Directory.
 Для выполнения операции укажите в поле tMbSec
 моникёр соединения с репозиторием, а в поле tArg
 параметры выполнения операции. Моникёр может быть получен при выполнении
 операции [OpenMetabase](OpenMetabase.htm).


Результатом операции будет коллекция, содержащая информацию о найденных
 субъектах безопасности, если поиск завершился успешно.


## Пример


Ниже приведён пример поиска пользователей. В запросе передаётся моникёр
 соединения с репозиторием и параметры поиска: поиск только среди пользователей
 СУБД, наименование пользователей соответствует заданному шаблону. В результате
 возвращается информация о найденных пользователях.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SubjectsSearch xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbSec xmlns="****">
  <id>NONMOGANMODGGOAEONFOCCMKHOOBGIMEGLBIKCNNPIACNCLJ!M</id>  </tMbSec>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <nameCriteria>test*</nameCriteria>  <isUser>true</isUser>  <isGroup>false</isGroup>  <includeDb>true</includeDb>  <includeNt>false</includeNt>  <includeMetabaseNt>false</includeMetabaseNt>  </tArg>
  </SubjectsSearch>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SubjectsSearchResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<subjects xmlns="****">
[![](../../minus.gif)](../../#)<Item>
  <k>158195</k>[![](../../minus.gif)](../../#)<sid>
  <sid>PS-1-158195</sid>  <type>User</type>  </sid>
  <name>TESTUSER</name>  <descr>TESTUSER</descr>  <distinguishedName />
  <userPrincipalName />
  <fullName />
  <isNt>0</isNt>  </Item>
  </subjects>
  </SubjectsSearchResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SubjectsSearch" :
  {
   "tMbSec" :
    {
     "id" : "NONMOGANMODGGOAEONFOCCMKHOOBGIMEGLBIKCNNPIACNCLJ!M"
    },
   "tArg" :
    {
     "nameCriteria" : "test*",
     "isUser" : "true",
     "isGroup" : "false",
     "includeDb" : "true",
     "includeNt" : "false",
     "includeMetabaseNt" : "false"
    }
  }
}

### JSON-ответ:


{
 "SubjectsSearchResult" :
  {
   "subjects" :
    {
     "Item" :
      {
       "k" : "158195",
       "sid" :
        {
         "sid" : "PS-1-158195",
         "type" : "User"
        },
       "name" : "TESTUSER",
       "descr" : "TESTUSER",
       "distinguishedName" : "",
       "userPrincipalName" : "",
       "fullName" : "",
       "isNt" : "0"
      }
    }
  }
}


public static MbSubjectsSearchResult SearchUsers(string mb)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSearch = new SubjectsSearch()
    {
        tArg = new MbSubjectsSearch()
        {
            includeDb = true,
            includeMetabaseNt = false,
            includeNt = false,
            isGroup = false,
            isUser = true,
            nameCriteria = "test*"
        },
        tMbSec = new MbId() { id = mb }
    };
    // Поиск пользователей
    var result = somClient.SubjectsSearch(tSearch);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
