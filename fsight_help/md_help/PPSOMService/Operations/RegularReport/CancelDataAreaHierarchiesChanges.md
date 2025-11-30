# CancelDataAreaHierarchiesChanges: Операция

CancelDataAreaHierarchiesChanges: Операция
-


**


# CancelDataAreaHierarchiesChanges


## Синтаксис


bool CancelDataAreaHierarchiesChanges(string mon)


## Параметры


mon. Моникёр
 для работы с аналитической областью данных регламентного отчёта.


## Описание


Операция CancelDataAreaHierarchiesChanges
 отменяет изменения, внесённые в структуру пользовательской иерархии у
 измерения среза аналитической области данных.


## Комментарии


Изменения вносятся с помощью операции [SetDataAreaCustomDim](SetDataAreaCustomDim.htm).
 Для отмены изменений укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea».
 Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет логическое значение true,
 если отмена изменений завершилась успешно.


## Пример


Ниже приведён пример отмены изменений в пользовательской иерархии. В
 запросе передаётся моникёр для работы с аналитической областью данных.
 В ответе возвращается признак успешной отмены изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CancelDataAreaHierarchiesChanges xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">CKBLCOMLGNPDGOAEOLMBENEEMJJPNLBEEJELMKJMFJMDPPKA!M!S!PJFDFHPMLGNPDGOAEIIKFLFJDIJHOCIHEOIELENPBPJCMFKEE!DataArea</mon>  </CancelDataAreaHierarchiesChanges>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CancelDataAreaHierarchiesChangesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CancelDataAreaHierarchiesChangesResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CancelDataAreaHierarchiesChanges" :
  {
   "mon" : "CKBLCOMLGNPDGOAEOLMBENEEMJJPNLBEEJELMKJMFJMDPPKA!M!S!PJFDFHPMLGNPDGOAEIIKFLFJDIJHOCIHEOIELENPBPJCMFKEE!DataArea"
  }
}

### JSON-ответ:


{
 "CancelDataAreaHierarchiesChangesResult" : "1"
}


public static bool CancelDataAreaHierarchiesChanges(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new CancelDataAreaHierarchiesChanges()
    {
        mon = moniker + "!DataArea"
    };
    // Отмена изменений в пользовательской иерархии
    var result = somClient.CancelDataAreaHierarchiesChanges(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
