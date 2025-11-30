# SemanticLayerSetPattern: Операция

SemanticLayerSetPattern: Операция
-


**


# SemanticLayerSetPattern


## Синтаксис


OpItemKey SemanticLayerSetPattern(string mon, SemanticLayerPatternArg
 tArg)


## Параметры


mon. Моникёр
 для работы с преднастроенными шаблонами подключения к СУБД.


tArg. Настройки создаваемого/изменяемого
 преднастроенного шаблона подключения к СУБД.


## Описание


Операция SemanticLayerSetPattern
 создаёт/изменяет преднастроенный шаблон подключения к СУБД.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных с постфиксом !Patterns.
 Для создания нового шаблона укажите в поле tArg.index
 пустое значение, а в полях tArg.connectionParams
 и tArg.name настройки подключения
 к СУБД и наименование создаваемого шаблона соответственно.


Для изменения существующего шаблона в поле tArg.index
 укажите его ключ, а в поле tArg.connectionParams
 новые настройки подключения. Моникёр может быть получен при выполнении
 операции [OpenSemanticLayer](OpenSemanticLayer.htm).


Результатом выполнения операции будет ключ созданного шаблона или значение
 0 при изменении существующего шаблона.


## Пример


Ниже приведён пример создания нового преднастроенного шаблона подключения
 к СУБД. В запросе передаётся моникёр для работы с преднастроенными шаблонами
 и настройки подключения. В ответе возвращается ключ созданного преднастроенного
 шаблона.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SemanticLayerSetPattern xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">KPACNCCOCDBDGOAEFDJDAIBAMJFFBCDEDJLPICPCMCFDIKCG!M!S!PLDNOFGCOCDBDGOAEMEKOCGKLAEFDMALEOIGKKCECKAAGLFHC!Patterns</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<connectionParams>
  <user>User</user>  <pass>Password</pass>[![](../../minus.gif)](../../#)<logonDataExt>
  <driver>MSSQL2012ODBC</driver>  <server>DBServer</server>  <database>Repository</database>  </logonDataExt>
  </connectionParams>
  <name>Шаблон подключения</name>  </tArg>
  </SemanticLayerSetPattern>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SemanticLayerSetPatternResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">358700</k>  </SemanticLayerSetPatternResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SemanticLayerSetPattern" :
  {
   "mon" : "KPACNCCOCDBDGOAEFDJDAIBAMJFFBCDEDJLPICPCMCFDIKCG!M!S!PLDNOFGCOCDBDGOAEMEKOCGKLAEFDMALEOIGKKCECKAAGLFHC!Patterns",
   "tArg" :
    {
     "connectionParams" :
      {
       "user" : "User",
       "pass" : "Password",
       "logonDataExt" :
        {
         "driver" : "MSSQL2012ODBC",
         "server" : "DBServer",
         "database" : "Repository"
        }
      },
     "name" : "Шаблон подключения"
    }
  }
}

### JSON-ответ:


{
 "SemanticLayerSetPatternResult" :
  {
   "k" : "358700"
  }
}


public static OpItemKey SemanticLayerSetPattern(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SemanticLayerSetPattern()
    {
        tArg = new SemanticLayerPatternArg()
        {
            index = null,
            name = "Шаблон подключения",
            connectionParams = new ConnectionParams()
            {
                logonDataExt = new MbLogonDataExt()
                {
                    database = "Repository",
                    driver = "MSSQL2012ODBC",
                    server = "DBServer"
                },
                user = "User",
                pass = "Password"
            }
        },
        // Моникёр для работы с преднастроенными шаблонами
        mon = moniker + "!Patterns"
    };
    // Создание нового преднастроенного шаблона подключения к СУБД
    var result = somClient.SemanticLayerSetPattern(tSet);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
