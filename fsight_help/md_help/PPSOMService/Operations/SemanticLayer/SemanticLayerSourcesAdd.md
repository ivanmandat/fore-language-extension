# SemanticLayerSourcesAdd: Операция

SemanticLayerSourcesAdd: Операция
-


**


# SemanticLayerSourcesAdd


## Синтаксис


ItKey SemanticLayerSourcesAdd(string mon, SemanticLayerSourcesAddArg
 tArg)


## Параметры


mon. Моникёр
 для работы с источниками модели данных.


tArg. Параметры выполнения
 операции.


## Описание


Операция SemanticLayerSourcesAdd
 добавляет источник в модель данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра модели данных с постфиксом !Sources.
 Моникёр может быть получен при выполнении операции [OpenSemanticLayer](OpenSemanticLayer.htm).
 Если требуется создать источник на основе шаблона, то укажите ключ шаблона
 в поле tArg.itemKey. Иначе задайте
 в поле tArg.connectionParams
 параметры подключения к СУБД.


Результатом выполнения операции будет ключ созданного источника.


## Пример


Ниже приведён пример добавления источника в модель данных. В запросе
 передаётся моникёр для работы с источниками и параметры подключения к
 источнику. В ответе возвращается ключ созданного источника.


	 SOAP
	  JSON  C#


### SOAP-запрос:


		[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../minus.gif)](../../#)<SemanticLayerSourcesAdd
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					  <mon xmlns="** **">ECLILKDCBLBDGOAEDKMFIAIDMENFPGPEHLJFNFCLBKCMGDDH!M!S!PHNEOHMDCBLBDGOAECKLPNOCOILIKDEJEJKJAGADEKNADKACB!Sources</mon>


					[![](../../minus.gif)](../../#)<tArg xmlns="** **">


						[![](../../minus.gif)](../../#)<connectionParams>


							  <user>User</user>


							  <pass>Password</pass>


							[![](../../minus.gif)](../../#)<logonDataExt>


								  <driver>MSSQL2012ODBC</driver>


								  <server>DBServer</server>


								  <database>Repository</database>


							  </logonDataExt>


						  </connectionParams>


					  </tArg>


				  </SemanticLayerSourcesAdd>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<soapenv:Body>


				[![](../../minus.gif)](../../#)<SemanticLayerSourcesAddResult
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


					  <k xmlns="** **">1</k>


				  </SemanticLayerSourcesAddResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


### JSON-запрос:


{
 "SemanticLayerSourcesAdd" :
  {
   "mon"
 : "ECLILKDCBLBDGOAEDKMFIAIDMENFPGPEHLJFNFCLBKCMGDDH!M!S!PHNEOHMDCBLBDGOAECKLPNOCOILIKDEJEJKJAGADEKNADKACB!Sources",
   "tArg"
 :
    {
     "connectionParams"
 :
      {
       "user"
 : "User",
       "pass"
 : "Password",
       "logonDataExt"
 :
        {
         "driver"
 : "MSSQL2012ODBC",
         "server"
 : "DBServer",
         "database"
 : "Repository"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SemanticLayerSourcesAddResult" :
  {
   "k"
 : "1"
  }
}


public static ItKey SemanticLayerSourcesAdd(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new SemanticLayerSourcesAdd()
    {
        tArg = new SemanticLayerSourcesAddArg()
        {
            connectionParams = new ConnectionParams()
            {
                logonDataExt = new MbLogonDataExt()
                {
                    database = "p7repository",
                    driver = "MSSQL2012ODBC",
                    server = "v-nrspo-mssql.dev.fs.fsight.world"
                },
                user = "sa",
                pass = "Qwerty1"
            }
        },
        // Моникёр открытого экземпляра модели данных
        mon = moniker + "!Sources"
    };
    // Добавление источника в модель данных
    var result = somClient.SemanticLayerSourcesAdd(tAdd);
    return result;
}


См. также:


[Работа
 с моделями данных](SemanticLayerOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
