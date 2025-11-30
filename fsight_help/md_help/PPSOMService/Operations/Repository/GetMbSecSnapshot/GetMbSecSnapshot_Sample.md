# Получение информации о резервном копировании политики безопасности: Операция GetMbSecSnapshot

Получение информации о резервном копировании политики безопасности: Операция GetMbSecSnapshot
-


**


# Получение информации о резервном копировании политики безопасности


Ниже приведён пример использования операции [GetMbSecSnapshot](../GetMbSecSnapshot.htm)
 для получения информации о текущем состоянии объекта, предназначенного
 для работы с резервными копиями политики безопасности. В запросе передаётся
 моникёр объекта и шаблон, в соответствии с которым будет получена информация
 о восстановлении политики безопасности. В ответе приходит запрошенная
 информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMbSecSnapshot xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbSecSnapshot xmlns="****">
  <id>S1!M!S!SecSna1</id>  </tMbSecSnapshot>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <all>true</all>[![](../../../minus.gif)](../../../#)<executePatt>
[![](../../../minus.gif)](../../../#)<loadState>
[![](../../../minus.gif)](../../../#)<onSubjectApply>
[![](../../../minus.gif)](../../../#)<subject>
  <profile>true</profile>  </subject>
  </onSubjectApply>
  </loadState>
  </executePatt>
  </pattern>
  </tArg>
  </GetMbSecSnapshot>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMbSecSnapshotResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!SecSna1</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<execute>
  <resolveTimeout>600000</resolveTimeout>  <state>Waiting</state>[![](../../../minus.gif)](../../../#)<loadState>
[![](../../../minus.gif)](../../../#)<onOperation>
  <applyOperation>Read</applyOperation>  <state>0</state>  </onOperation>
  </loadState>
  </execute>
[![](../../../minus.gif)](../../../#)<log>
  <its />
  </log>
  </meta>
  </GetMbSecSnapshotResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{

 "GetMbSecSnapshot" :

  {

   "tMbSecSnapshot" :

    {

     "id" : "S1!M!S!SecSna1"

    },

   "tArg" :

    {

     "pattern" :

      {

       "all" : "true",

       "executePatt" :

        {

         "loadState" :

          {

           "onSubjectApply" :

            {

             "subject" :

              {

               "profile" : "true"

              }

            }

          }

        }

      }

    }

  }

}


### JSON-ответ:


{

 "GetMbSecSnapshotResult" :

  {

   "id" :

    {

     "id" : "S1!M!S!SecSna1"

    },

   "meta" :

    {

     "execute" :

      {

       "resolveTimeout" : "600000",

       "state" : "Waiting",

       "loadState" :

        {

         "onOperation" :

          {

           "applyOperation" : "Read",

           "state" : "0"

          }

        }

      },

     "log" :

      {

       "its" : ""

      }

    }

  }

}


public static GetMbSecSnapshotResult GetStateSnapshot(string secSnapshot)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetMbSecSnapshot()
    {
        tArg = new GetMbSecSnapshotArg()
        {
            pattern = new MbSecSnapshotMdPattern()
            {
                all = true,
                executePatt =  new MbSecSnapshotExecutePattern()
                {
                    loadState = new MbSecSnapshotExecuteLoadStatePattern()
                    {
                        onSubjectApply = new MbSecSnapshotExecuteLoadOnSubjectApplyStatePattern()
                        {
                            subject = new MbSubjectPattern() { profile = true }
                        }
                    }
                }
            }
        },
        tMbSecSnapshot = new MbSecSnapshotId() { id = secSnapshot }
    };
    //Получение информации об объекте
    var result = somClient.GetMbSecSnapshot(tGet);
    return result;
}


См. также:


[GetMbSecSnapshot](../GetMbSecSnapshot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
