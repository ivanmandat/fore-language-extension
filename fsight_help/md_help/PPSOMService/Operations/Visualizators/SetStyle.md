# SetStyle: Операция

SetStyle: Операция
-


**


# SetStyle


## Синтаксис


bool SetStyle(string mon, StyleMetaData tArg)


## Параметры


mon. Моникёр,
 содержащий информацию о диапазоне ячеек или области таблицы, оформление
 которых необходимо изменить.


tArg.
 Параметры стиля оформления, которые необходимо применить к области таблицы.


## Описание


Операция SetStyle изменяет стиль
 оформления для диапазона ячеек или заданной области таблицы, отображающей
 аналитическую область данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр в следующем формате:


	- Для работы с диапазоном ячеек:«Моникёр
	 экземпляра рег.отчёта!Sheets!<Ключ листа>!<абсолютный адрес>!Style».
	 Абсолютный адрес может быть указан в различных форматах, которые предусмотрены
	 для ячеек, например: A5, A5:D10, R5C3, C:C, 43:43.


	- Для работы с заданной областью таблицы: «Моникёр
	 экземпляра рег.отчёта!DataArea!DataSources!<ключ источника>!DataSourceSlices!<ключ
	 среза>!Views!<ключ таблицы>!EaxTableStyle!».

	Также данный моникёр необходимо дополнить одним из следующих значений:


		- «Internal» - для
		 изменения оформления области данных;


		- «Top» - для изменения
		 оформления заголовков столбцов;


		- «Left» - для изменения
		 оформления заголовков строк.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](../RegularReport/OpenPrxMeta.htm).


Для изменения стиля оформления, заданного для блока контроля, укажите
 моникёр, полученный в поле «meta.calcObjet.validBlock.style»
 в результате выполнения операции [GetAlg](../Algo/GetAlg.htm).


В поле tArg.style укажите параметры
 стиля оформления, которые необходимо применить.


Операция вернёт значение true,
 если применение оформления завершилось успешно.


## Пример


Ниже приведён пример изменения оформления заголовков столбцов таблицы.
 В запросе передаётся моникёр области таблицы и параметры применяемого
 стиля. В ответе приходит признак удачного изменения стиля оформления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetStyle xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Views!3!EaxTableStyle!Top</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<style>
  <Text HA="**1**" VA="**1**" WW="**1**" M="**7px 6px 8px 6px**" />
  <NumberFormat FT="**0**" F="****" />
  <Font F="**Arial**" S="**8**" B="**true**" H="**12**" />
  <Borders />
  <Hyperlink />
  </style>
  </tArg>
  </SetStyle>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetStyleResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetStyleResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetStyle" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources!1!DataSourceSlices!1!Views!3!EaxTableStyle!Top",
   "tArg" :
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
         "@B" : "true",
         "@S" : "8",
         "@F" : "Arial",
         "@H" : "12"
        },
       "Borders" : "",
       "Hyperlink" : ""
      }
    }
  }
}

### JSON-ответ:


{
 "SetStyleResult" : "1"
}


public static bool SetSpecificRangeStyle(string moniker, uint sourceKey, uint sliceKey, uint viewKey, TabStyle newStyle)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetStyle()
    {
        tArg = new StyleMetaData()
        {
            style = newStyle
        },
        mon = moniker + "!DataArea!DataSources!" + sourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Views!" + viewKey.ToString() + "!EaxTableStyle!Top"
    };
    //Изменение стиля
    var result = somClient.SetStyle(tSet);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
