# ClearDataAreaHierarchy: Операция

ClearDataAreaHierarchy: Операция
-


**


# ClearDataAreaHierarchy


## Синтаксис


bool ClearDataAreaHierarchy(string mon)


## Параметры


mon. Моникёр
 для работы с аналитической областью данных регламентного отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция ClearDataAreaHierarchy
 сбрасывает пользовательскую иерархию, которая была настроена у измерения
 среза аналитической области данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea»
 для работы с аналитической областью данных, а в поле tArg
 задайте срез и измерение, у которого необходимо сбросить пользовательскую
 иерархию. Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет логическое значение true,
 если сброс пользовательской иерархии завершился успешно.


## Пример


Ниже приведён пример сброса пользовательской иерархии у измерения среза.
 В запросе передаётся моникёр для работы с аналитической областью данных,
 ключ среза и измерения, у которого необходимо сбросить пользовательскую
 иерархию. В ответе возвращается признак успешного сброса пользовательской
 иерархии.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ClearDataAreaHierarchy xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">CKBLCOMLGNPDGOAEOLMBENEEMJJPNLBEEJELMKJMFJMDPPKA!M!S!PJFDFHPMLGNPDGOAEIIKFLFJDIJHOCIHEOIELENPBPJCMFKEE!DataArea</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <sliceKey>1</sliceKey>  <dimKey>116</dimKey>  </tArg>
  </ClearDataAreaHierarchy>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <ClearDataAreaHierarchyResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</ClearDataAreaHierarchyResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ClearDataAreaHierarchy" :
  {
   "mon" : "CKBLCOMLGNPDGOAEOLMBENEEMJJPNLBEEJELMKJMFJMDPPKA!M!S!PJFDFHPMLGNPDGOAEIIKFLFJDIJHOCIHEOIELENPBPJCMFKEE!DataArea",
   "tArg" :
    {
     "sliceKey" : "1",
     "dimKey" : "116"
    }
  }
}

### JSON-ответ:


{
 "ClearDataAreaHierarchyResult" : "1"
}


public static bool ClearDataAreaHierarchy(string moniker, uint sliceKey, uint dimKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new ClearDataAreaHierarchy()
    {
        tArg = new ClearDataAreaSliceHierarchy()
        {
            sliceKey = sliceKey,
            dimKey = dimKey
        },
        mon = moniker + "!DataArea"
    };
    // Сброс пользовательской иерархии
    var result = somClient.ClearDataAreaHierarchy(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
