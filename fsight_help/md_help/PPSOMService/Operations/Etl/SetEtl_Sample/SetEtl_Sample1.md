# Запуск задачи ETL на выполнение: Операция SetEtl

Запуск задачи ETL на выполнение: Операция SetEtl
-


**


# Запуск задачи ETL на выполнение


Ниже приведен пример использования операции [SetEtl](../SetEtl.htm)
 для запуска задачи ETL на выполнение. В запросе передается моникёр задачи
 ETL и параметры запуска: выполнение происходит в асинхронном режиме. Пример
 проверки статуса выполнения приведен в подразделе «[Получение
 информации о статусе выполнения задачи ETL](../GetEtl_Sample/GetEtl_Sample1.htm)» для операции [GetEtl](../GetEtl.htm).


[![](../../../Opened.gif)![](../../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetEtl xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tEtl xmlns="****">
  <id>S1!M!S!L1</id>  </tEtl>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <execute>true</execute>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<execute>
  <command>RunAsync</command>  </execute>
  </meta>
  </tArg>
  </SetEtl>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetEtlResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!L1</id>  </id>
  </SetEtlResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../../Opened.gif)![](../../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "SetEtl" :
  {
   "tEtl" :
    {
     "id" : "S1!M!S!L1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "execute" : "true"
      },
     "meta" :
      {
       "execute" :
        {
         "command" : "RunAsync"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetEtlResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!L1"
    }
  }
}


[![](../../../Opened.gif)![](../../../Closed.gif)C#](javascript:TextPopup(this))


public static SetEtlResult ExecuteETLTask(EtlId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetEtl()
    {
        tArg = new SetEtlArg()
        {
            pattern = new EtlMdPattern()
            {
                execute = true
            },
            meta = new EtlMd()
            {
                execute = new EtlExecute()
                {
                    command = EtlTaskExecuteCommand.RunAsync
                }
            }
        },
        tEtl = moniker
    };
    //Запуск задачи на выполнение
    var result = somClient.SetEtl(tSet);
    return result;
}


См. также:


[SetEtl:
 Операция](../SetEtl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
