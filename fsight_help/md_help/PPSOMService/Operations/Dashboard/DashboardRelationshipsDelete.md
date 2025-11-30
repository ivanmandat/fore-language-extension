# DashboardRelationshipsDelete: Операция

DashboardRelationshipsDelete: Операция
-


**


# DashboardRelationshipsDelete


## Синтаксис


bool DashboardRelationshipsDelete(string mon, OpItemKey
 tArg)


## Параметры


mon. Моникёр
 для работы с отношениями, используемыми в формулах вычисляемых фактов.


tArg. Ключ удаляемого отношения.


## Описание


Операция DashboardRelationshipsDelete
 удаляет отношение.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра информационной панели с постфиксом «!Sources!ключ источника!Relationships»,
 а в поле tArg.k ключ удаляемого
 отношения. Моникёр может быть получен при выполнении операции [OpenDashboard](OpenDashboard.htm).
 Ключ может быть получен в результате операции [GetDashboardRelationships](GetDashboardRelationships.htm)
 или [DashboardRelationshipsAdd](DashboardRelationshipsAdd.htm).


Результатом выполнения операции будет логическое значение true,
 если удаление отношения завершилось успешно.


## Пример


Ниже приведён пример удаления отношения. В запросе передаётся моникёр
 для работы с отношениями и ключ удаляемого отношения. В ответе возвращается
 признак успешного удаления.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardRelationshipsDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Relationships</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>4</k>  </tArg>
  </DashboardRelationshipsDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardRelationshipsDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardRelationshipsDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardRelationshipsDelete" :
  {
   "mon" : "LKACHLFPHPFFGOAEFAJMIHOHCKLEPLKEEIENANDBMODOBJMH!M!S!PHOONDMFPHPFFGOAEGILOHDKLDDEDFAAEEJAAJAMKHGKPJBCK!Sources!1!Relationships",
   "tArg" :
    {
     "k" : "4"
    }
  }
}

### JSON-ответ:


{
 "DashboardRelationshipsDeleteResult" : "1"
}


public static bool DashboardRelationshipsDelete(string moniker, uint sourceKey, uint relKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new DashboardRelationshipsDelete()
    {
        tArg = new OpItemKey() { k = relKey },
        // Моникёр для работы с отношениями
        mon = moniker + "!Sources!" + sourceKey + "!Relationships"
    };
    // Удаление отношения
    var result = somClient.DashboardRelationshipsDelete(tDel);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
