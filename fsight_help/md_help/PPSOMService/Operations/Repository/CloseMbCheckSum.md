# CloseMbCheckSum: Операция

CloseMbCheckSum: Операция
-


**


# CloseMbCheckSum


## Синтаксис


bool CloseMbCheckSum(MbCheckSumId tMbCheckSum)


## Параметры


tMbCheckSum. Моникёр
 для работы с контрольными суммами.


## Описание


Операция CloseMbCheckSum закрывает
 контекст для работы с контрольными суммами.


## Комментарии


Для выполнения операции укажите в поле tMbCheckSum
 моникёр для работы с контрольными суммами. Моникёр может быть получен
 при выполнении операции [OpenMbCheckSum](OpenMbCheckSum.htm).
 Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия контекста для работы с контрольными суммами.
 В запросе передаётся моникёр для работы с контрольными суммами. В ответе
 приходит признак успешного закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseMbCheckSum xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbCheckSum xmlns="****">
  <id>S1!M!S!MbCheckSum2</id>  </tMbCheckSum>
  </CloseMbCheckSum>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseMbCheckSumResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseMbCheckSumResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseMbCheckSum" :
  {
   "tMbCheckSum" :
    {
     "id" : "S1!M!S!MbCheckSum2"
    }
  }
}

### JSON-ответ:


{
 "CloseMbCheckSumResult" : "1"
}


public static bool CloseCheckSum(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseMbCheckSum()
    {
        tMbCheckSum = new MbCheckSumId() { id = moniker }
    };
    // Закрываем контекст для работы с контрольными суммами
    var result = somClient.CloseMbCheckSum(tClose);
    return result;
}


См. также:


[Операции
 для работы с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
