# CheckExcludeGridElem: Операция

CheckExcludeGridElem: Операция
-


**


# CheckExcludeGridElem


## Синтаксис


CheckSelectResult CheckExcludeGridElem(string mon)


## Параметры


mon. Моникёр
 визуализатора Таблица.


## Описание


Операция CheckExcludeGridElem
 проверяет возможность исключения элемента(ов) из таблицы.


## Комментарии


Операция проверяет возможность исключения элемента(ов) в измерении шапки/боковика,
 которые выделены в текущий момент. Для выполнения операции укажите в поле
 mon моникёр экземпляра регламентного
 отчёта с постфиксом «!DataArea!DataSources!ключ
 источника!DataSourceSlices!ключ среза!Views!ключ таблицы» для работы
 с визуализатором. Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будут признаки возможности исключения
 выделенного элемента(ов) и всех элементов, кроме выделенного элемента(ов).


## Пример


Ниже приведён пример проверки возможности исключения элемента(ов) из
 таблицы. Предполагается, что в таблице выделен какой-либо элемент шапки
 или боковика. В запросе передаётся моникёр таблицы. В ответе возвращается
 признак возможности исключить выделенный элемент или все элементы, кроме
 выделенного.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CheckExcludeGridElem xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">AINBKOKJPMHFGOAECGKFDNLHBIFAAFAEMLOAJECGJHELACKJ!M!S!PNBCFPBLJPMHFGOAEKFMFNOCEOKJPPMMEAIMHDCCOFINHDFJM!DataArea!DataSources!1!DataSourceSlices!1!Views!1</mon>  </CheckExcludeGridElem>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<CheckExcludeGridElemResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <excludeOther xmlns="****">1</excludeOther>  <exclude xmlns="****">1</exclude>  </CheckExcludeGridElemResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CheckExcludeGridElem" :
  {
   "mon" : "AINBKOKJPMHFGOAECGKFDNLHBIFAAFAEMLOAJECGJHELACKJ!M!S!PNBCFPBLJPMHFGOAEKFMFNOCEOKJPPMMEAIMHDCCOFINHDFJM!DataArea!DataSources!1!DataSourceSlices!1!Views!1"
  }
}

### JSON-ответ:


{
 "CheckExcludeGridElemResult" :
  {
   "excludeOther" : "1",
   "exclude" : "1"
  }
}


public static CheckSelectResult CheckExcludeGridElem(string moniker, uint sourceKey, uint sliceKey, uint viewKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tRef = new CheckExcludeGridElem()
    {
        mon = moniker + "!DataArea!DataSources!" + sourceKey + "!DataSourceSlices!" + sliceKey + "!Views!" + viewKey
    };
    // Проверка возможности исключения выделенного в шапке/боковике элемента(ов)
    var result = somClient.CheckExcludeGridElem(tRef);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
