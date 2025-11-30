# Восстановление политики безопасности из резервной копии: Операция SetMbSecSnapshot

Восстановление политики безопасности из резервной копии: Операция SetMbSecSnapshot
-


**


# Восстановление политики безопасности из резервной копии


Ниже приведён пример использования операции [SetMbSecSnapshot](../SetMbSecSnapshot.htm)
 для восстановления политики безопасности из резервной копии. В запросе
 передаётся моникёр объекта, предназначенного для работы с резервными копиями,
 и моникёр бинарного файла, содержащего резервную копию. В ответе приходит
 отчёт о процессе восстановления политики безопасности.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetMbSecSnapshot xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbSecSnapshot xmlns="****">
  <id>S1!M!S!SecSna1</id>  </tMbSecSnapshot>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <all>true</all>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<execute>
  <command>Load</command>  <async>false</async>[![](../../../minus.gif)](../../../#)<snapshotToLoad>
  <id>S1!M!Bin!0</id>  </snapshotToLoad>
  </execute>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <all>true</all>  </metaGet>
  </tArg>
  </SetMbSecSnapshot>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetMbSecSnapshotResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
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
  </SetMbSecSnapshotResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{

 "SetMbSecSnapshot" :

  {

   "tMbSecSnapshot" :

    {

     "id" : "S1!M!S!SecSna1"

    },

   "tArg" :

    {

     "pattern" :

      {

       "all" : "true"

      },

     "meta" :

      {

       "execute" :

        {

         "command" : "Load",

         "async" : "false",

         "snapshotToLoad" :

          {

           "id" : "S1!M!Bin!0"

          }

        }

      },

     "metaGet" :

      {

       "all" : "true"

      }

    }

  }

}


### JSON-ответ:


{

 "SetMbSecSnapshotResult" :

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


public static SetMbSecSnapshotResult LoadSnapshot(string secSnapshot, string snapshotToLoadId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetMbSecSnapshot()
    {
        tArg = new SetMbSecSnapshotArg()
        {
            meta = new MbSecSnapshotMd()
            {
                execute = new MbSecSnapshotExecute()
                {
                    command = MbSecSnapshotExecuteCommand.Load,
                    async = false,
                    snapshotToLoad = new BinaryId() { id = snapshotToLoadId }
                }
            },
            pattern = new MbSecSnapshotMdPattern()
            {
                all = true
            },
            metaGet = new MbSecSnapshotMdPattern()
            {
                all = true
            }
        },
        tMbSecSnapshot = new MbSecSnapshotId() { id = secSnapshot }
    };
    //Восстановление политики безопасности из резервной копии
    var result = somClient.SetMbSecSnapshot(tSet);
    return result;
}


См. также:


[SetMbSecSnapshot](../SetMbSecSnapshot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
