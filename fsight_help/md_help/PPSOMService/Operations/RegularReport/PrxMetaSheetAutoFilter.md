# PrxMetaSheetAutoFilter: Операция

PrxMetaSheetAutoFilter: Операция
-


**


# PrxMetaSheetAutoFilter


## Синтаксис


bool PrxMetaSheetAutoFilter(string mon)


## Параметры


mon. Моникёр
 листа регламентного отчёта.


## Описание


Операция PrxMetaSheetAutoFilter
 включает/выключает автофильтр на листе регламентного отчёта.


## Комментарии


Перед выполнением операции в таблице должен быть выделен какой-либо
 диапазон ячеек, содержащих данные. Для изменения отмеченного диапазона
 используйте операцию [SetTabSheetData](../Visualizators/SetTabSheetData.htm).


Для выполнения операции PrxMetaSheetAutoFilter
 укажите в поле mon моникёр в
 следующем формате: «Моникёр экземпляра
 рег.отчёта!Sheets!Ключ листа». Повторный вызов отключает автофильтр.
 Моникёр экземпляра регламентного отчёта может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет логическое значение true,
 если доступно изменение автофильтра и false,
 если включение автофильтра по каким-либо причинам невозможно.


## Пример


Ниже приведён пример включения автофильтра на листе регламентного отчёта.
 В запросе передаётся моникёр листа. В ответе возвращается признак успешного
 включения автофильтра.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaSheetAutoFilter xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">AHJKEIMPCFKNFOAELIJIBPGEKCGMJLGEPKABMNOAGNOLMJKO!M!S!PNIDLKJMPCFKNFOAEBLMIGAAPBJANABBEKIKMCOOLGEHJMDMM!Sheets!1</mon>  </PrxMetaSheetAutoFilter>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PrxMetaSheetAutoFilterResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PrxMetaSheetAutoFilterResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaSheetAutoFilter" :
  {
   "mon" : "AHJKEIMPCFKNFOAELIJIBPGEKCGMJLGEPKABMNOAGNOLMJKO!M!S!PNIDLKJMPCFKNFOAEBLMIGAAPBJANABBEKIKMCOOLGEHJMDMM!Sheets!1"
  }
}

### JSON-ответ:


{
 "PrxMetaSheetAutoFilterResult" : "1"
}


public static bool PrxMetaSheetAutoFilter(string moniker, int listKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new PrxMetaSheetAutoFilter()
    {
        mon = moniker + "!Sheets!" + listKey.ToString()
    };
    // Включение автофильтра
    var result = somClient.PrxMetaSheetAutoFilter(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
