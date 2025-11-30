# GetStyle: Операция

GetStyle: Операция
-


**


# GetStyle


## Синтаксис


StyleMetaData GetStyle(string mon)


## Параметры


mon. Моникёр,
 содержащий информацию об области таблицы, оформление которой необходимо
 получить.


## Описание


Операция GetStyle получает стиль
 оформления для диапазона ячеек или заданной области таблицы, отображающей
 аналитическую область данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр в следующем формате:


	- Для работы с диапазоном ячеек: «Моникёр
	 экземпляра рег.отчёта!Sheets!<Ключ листа>!<абсолютный адрес>!Style».
	 Абсолютный адрес может быть указан в различных форматах, которые предусмотрены
	 для ячеек, например: A5, A5:D10, R5C3, C:C, 43:43.


	- Для работы с заданной областью таблицы: «Моникёр
	 экземпляра рег.отчёта!DataArea!DataSources!<ключ источника>!DataSourceSlices!<ключ
	 среза>!Views!<ключ таблицы>!EaxTableStyle!».

	Также данный моникёр необходимо дополнить одним из следующих значений:


		- «Internal» - для
		 получения оформления области данных;


		- «Top» - для получения
		 оформления заголовков столбцов;


		- «Left» - для получения
		 оформления заголовков строк.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](../RegularReport/OpenPrxMeta.htm).
 Операция вернёт оформление указанной области таблицы.


Для работы со стилем оформления, заданным для блока контроля, моникёр
 может быть получен в поле «meta.calcObjet.validBlock.style»
 в результате выполнения операции [GetAlg](../Algo/GetAlg.htm).


## Пример


Ниже приведён пример получения оформления заголовков строк таблицы.
 В запросе передаётся моникёр области таблицы. В ответе приходит полученное
 оформление.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetStyle xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Views!3!EaxTableStyle!Left</mon>  </GetStyle>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetStyleResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<style xmlns="****">
  <Text HA="**1**" VA="**1**" WW="**1**" M="**7px 6px 8px 6px**" />
  <NumberFormat F="****" FT="**0**" />
  <Font F="**Arial**" S="**8**" B="**false**" H="**12**" />
  <Borders />
  <Hyperlink />
  </style>
  </GetStyleResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetStyle" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Views!3!EaxTableStyle!Left"
  }
}

### JSON-ответ:


{
 "GetStyleResult" :
  {
   "style" :
    {
     "Text" :
      {
       "@VA" : "1",
       "@HA" : "1",
       "@M" : "7px 6px 8px 6px",
       "@WW" : "1"
      },
     "NumberFormat" :
      {
       "@F" : "",
       "@FT" : "0"
      },
     "Font" :
      {
       "@B" : "false",
       "@S" : "8",
       "@F" : "Arial",
       "@H" : "12"
      },
     "Borders" : "",
     "Hyperlink" : ""
    }
  }
}


public static StyleMetaData GetSpecificRangeStyle(string moniker, uint sourceKey, uint sliceKey, uint viewKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetStyle()
    {
        //mon = moniker + "!DataArea!DataSources!" + sourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Views!" + viewKey.ToString() + "!EaxTableStyle!Left"
        mon = moniker + "!DataArea!Views!" + viewKey.ToString() + "!EaxTableStyle!Left"
    };
    //Получение стиля
    var result = somClient.GetStyle(tGet);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
