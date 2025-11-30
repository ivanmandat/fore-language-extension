# Создание глобальной переменной: Операция SetRepoParams

Создание глобальной переменной: Операция SetRepoParams
-


**


# Создание глобальной переменной


Ниже приведён пример использования операции [SetRepoParams](../SetRepoParams.htm)
 для создания новой глобальной переменной. В запросе передаётся моникёр
 репозитория, шаблон, указывающий необходимость создания глобальной переменной
 и метаданные, содержащие параметры глобальной переменной. В ответе приходит
 обновлённый список глобальных переменных репозитория.


	 SOAP  JSON
	  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetRepoParams xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMb xmlns="****">
  <id>NCNODCBKFLJMFOAEBOCGFBINJBKLJKMEHIPDDDDKLEKKNJDH!M</id>  </tMb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <sharedParams>Add</sharedParams>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<sharedParams>
[![](../../../minus.gif)](../../../#)<params>
[![](../../../minus.gif)](../../../#)<it>
  <k>-1</k>  <id>START_PERIOD_D</id>  <n>Дата начала вычислений</n>  <value>01.01.2020 00:00</value>  <dt>4</dt>  </it>
  </params>
  </sharedParams>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <sharedParams>Get</sharedParams>  </metaGet>
  </tArg>
  </SetRepoParams>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetRepoParamsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>NCNODCBKFLJMFOAEBOCGFBINJBKLJKMEHIPDDDDKLEKKNJDH!M</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<sharedParams>
  <IsShared>1</IsShared>  <Url>http://v-shp-development.dev.fs.fsight.world</Url>[![](../../../minus.gif)](../../../#)<params>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>GLOBAL_INT</id>  <n>Ограничение</n>  <vis>1</vis>  <value>600</value>  <dt>2</dt>  <binding>UI="IntegerEdit"</binding>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>START_PERIOD_D</id>  <n>Дата начала вычислений</n>  <vis>1</vis>  <value>2020-01-01</value>  <dt>4</dt>  <binding />
  </it>
  </params>
  </sharedParams>
  </meta>
  </SetRepoParamsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetRepoParams" :
  {
   "tMb" :
    {
     "id" : "NCNODCBKFLJMFOAEBOCGFBINJBKLJKMEHIPDDDDKLEKKNJDH!M"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "sharedParams" : "Add"
      },
     "meta" :
      {
       "sharedParams" :
        {
         "params" :
          {
           "it" :
            {
             "k" : "-1",
             "id" : "START_PERIOD_D",
             "n" : "Дата начала вычислений",
             "value" : "01.01.2020 00:00",
             "dt" : "4"
            }
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "sharedParams" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "SetRepoParamsResult" :
  {
   "id" :
    {
     "id" : "NCNODCBKFLJMFOAEBOCGFBINJBKLJKMEHIPDDDDKLEKKNJDH!M"
    },
   "meta" :
    {
     "sharedParams" :
      {
       "IsShared" : "1",
       "Url" : "http:\/\/v-shp-development.dev.fs.fsight.world",
       "params" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "GLOBAL_INT",
             "n" : "Ограничение",
             "vis" : "1",
             "value" : "600",
             "dt" : "2",
             "binding" : "UI="IntegerEdit""
            },
            {
             "k" : "2",
             "id" : "START_PERIOD_D",
             "n" : "Дата начала вычислений",
             "vis" : "1",
             "value" : "2020-01-01",
             "dt" : "4",
             "binding" : ""
            }
          ]
        }
      }
    }
  }
}


public static RepoParamsResult AddSharedParam(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetRepoParams()
    {
        tArg = new SetRepoParamsArg()
        {
            pattern = new RepoParamsMdPattern()
            {
                sharedParams = ListOperation.Add
            },
            meta = new RepoParamsMd()
            {
                sharedParams = new RepoSharedParams()
                {
                    @params = new OdArg[]
                    {
                        new OdArg()
                        {
                            k = uint.MaxValue,
                            id = "START_PERIOD_D",
                            n = "Дата начала вычислений",
                            value = "01.01.2020 00:00",
                            dt = 4 // DbDataType.DateTime
                        }
                    }
                }
            },
            metaGet = new RepoParamsMdPattern()
            {
                sharedParams = ListOperation.Get
            }
        },
        tMb = new MbId() { id = moniker }
    };
    //Изменение параметров репозитория
    var result = somClient.SetRepoParams(tSet);
    return result;
}


См. также:


[SetRepoParams:
 Операция](../SetRepoParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
