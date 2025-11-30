# OpenMbCheckSum: Операция

OpenMbCheckSum: Операция
-


**


# OpenMbCheckSum


## Синтаксис


OpenMbCheckSumResult OpenMbCheckSum(MbId tMb, OpenMbCheckSumArg
 tArg)


## Параметры


tMb. Моникёр
 соединения с репозиторием, в котором осуществляется работа с контрольными
 суммами.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenMbCheckSum открывает
 контекст для работы с контрольными суммами.


## Комментарии


Для выполнения операции укажите в поле tMb
 моникёр соединения с репозиторием, а в поле tArg
 пустое значение. Результатом операции будет моникёр для работы с контрольными
 суммами. Дальнейшая работа осуществляется с помощью операций [GetMbCheckSum](GetMbCheckSum.htm) и [SetMbCheckSum](SetMbCheckSum.htm). Для закрытия контекста
 работы с контрольными суммами используйте операцию [CloseMbCheckSum](CloseMbCheckSum.htm).


## Пример


Ниже приведён пример открытия контекста для работы с контрольными суммами.
 В запросе передаётся моникёр соединения с репозиторием. В ответе приходит
 моникёр для работы с контрольными суммами.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenMbCheckSum xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xmlns="****">
  <id>S1!M</id>  </tMb>
  <tArg xmlns="****" />
  </OpenMbCheckSum>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenMbCheckSumResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!MbCheckSum1</id>  </id>
  </OpenMbCheckSumResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenMbCheckSum" :
  {
   "tMb" :
    {
     "id" : "S1!M"
    },
   "tArg" : ""
  }
}

### JSON-ответ:


{
 "OpenMbCheckSumResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!MbCheckSum1"
    }
  }
}


public static OpenMbCheckSumResult OpenCheckSum(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOp = new OpenMbCheckSum()
    {
        tMb = new MbId() { id = moniker },
        tArg = new OpenMbCheckSumArg()
    };
    // Открываем контекст для работы с контрольными суммами
    var result = somClient.OpenMbCheckSum(tOp);
    return result;
}


См. также:


[Операции
 для работы с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
