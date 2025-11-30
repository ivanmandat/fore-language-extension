# ApplyDataAreaHierarchiesChanges: Операция

ApplyDataAreaHierarchiesChanges: Операция
-


**


# ApplyDataAreaHierarchiesChanges


## Синтаксис


bool ApplyDataAreaHierarchiesChanges(string mon)


## Параметры


mon. Моникёр
 для работы с аналитической областью данных регламентного отчёта.


## Описание


Операция ApplyDataAreaHierarchiesChanges
 применяет изменения, внесённые в структуру пользовательской иерархии у
 измерения среза аналитической области данных.


## Комментарии


Изменения вносятся с помощью операции [SetDataAreaCustomDim](SetDataAreaCustomDim.htm).
 Для применения изменений укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea».
 Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет логическое значение true,
 если применение изменений завершилось успешно.


## Пример


Ниже приведён пример применения изменений в пользовательской иерархии.
 В запросе передаётся моникёр для работы с аналитической областью данных.
 В ответе возвращается признак успешного применения изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ApplyDataAreaHierarchiesChanges xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">CKBLCOMLGNPDGOAEOLMBENEEMJJPNLBEEJELMKJMFJMDPPKA!M!S!PJFDFHPMLGNPDGOAEIIKFLFJDIJHOCIHEOIELENPBPJCMFKEE!DataArea</mon>  </ApplyDataAreaHierarchiesChanges>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <ApplyDataAreaHierarchiesChangesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</ApplyDataAreaHierarchiesChangesResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ApplyDataAreaHierarchiesChanges" :
  {
   "mon" : "CKBLCOMLGNPDGOAEOLMBENEEMJJPNLBEEJELMKJMFJMDPPKA!M!S!PJFDFHPMLGNPDGOAEIIKFLFJDIJHOCIHEOIELENPBPJCMFKEE!DataArea"
  }
}

### JSON-ответ:


{
 "ApplyDataAreaHierarchiesChangesResult" : "1"
}


public static bool ApplyDataAreaHierarchiesChanges(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new ApplyDataAreaHierarchiesChanges()
    {
        mon = moniker + "!DataArea"
    };
    // Применение изменений в пользовательской иерархии
    var result = somClient.ApplyDataAreaHierarchiesChanges(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
