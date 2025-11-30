# GetTabTableStyle: Операция

GetTabTableStyle: Операция
-


**


# GetTabTableStyle


## Синтаксис


TabTableStyle GetTabTableStyle(string mon)


## Параметры


mon. Моникёр
 для работы со стилем оформления табличной области.


## Описание


Операция GetTabTableStyle получает
 параметры стиля оформления табличной области.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр табличной области. Моникёр указывается в следующем формате: «Моникёр экземпляра рег.отчёта!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Views!«ключ таблицы»!EaxTableStyle!TableStyle».


Результатом операции будут настройки стиля, используемого для оформления
 табличной области.


## Пример


Ниже приведён пример получения информации о стиле, который применён
 для табличной области данных. В запросе передаётся моникёр для работы
 со стилями табличной области данных. В ответе возвращается полученная
 информация о стиле.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetTabTableStyle xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">HKJBPOFGHFLNFOAEPCMMOLCIPENIILFEJLJPJINGDHAMFJHO!M!S!PKIBJJDGGHFLNFOAELFBDMPPAAHADDJBECIFBLMKKFMCDJAFG!DataArea!DataSources!1!DataSourceSlices!1!Views!1!EaxTableStyle!TableStyle</mon>  </GetTabTableStyle>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetTabTableStyleResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <Name xmlns="****">EAX table style</Name>[![](../../../minus.gif)](../../../#)<Range xmlns="****">
  <left>0</left>  <top>0</top>  <width>0</width>  <height>0</height>  </Range>
[![](../../../minus.gif)](../../../#)<Corner UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Fill C="**#FFB2AD**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**6**" S="**0**" C="**#FFFFFF**" />
  <Border I="**7**" S="**0**" C="**#FFFFFF**" />
  </Borders>
  <Hyperlink />
  </Corner>
[![](../../../minus.gif)](../../../#)<FirstRow xmlns="****">
  <Width>1</Width>[![](../../../minus.gif)](../../../#)<Style UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Fill C="**#FFFFFF**" />
  <Borders />
  <Hyperlink />
  </Style>
  </FirstRow>
[![](../../../minus.gif)](../../../#)<SecondRow xmlns="****">
  <Width>1</Width>[![](../../../minus.gif)](../../../#)<Style UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Fill C="**#FFD8D6**" />
  <Borders />
  <Hyperlink />
  </Style>
  </SecondRow>
[![](../../../minus.gif)](../../../#)<FirstColumn xmlns="****">
  <Width>1</Width>  </FirstColumn>
[![](../../../minus.gif)](../../../#)<SecondColumn xmlns="****">
  <Width>1</Width>  </SecondColumn>
[![](../../../minus.gif)](../../../#)<HeaderRow xmlns="****">
  <Width>1</Width>[![](../../../minus.gif)](../../../#)<Style UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Fill C="**#FFD8D6**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**2**" S="**0**" C="**#BBBBBB**" />
  <Border I="**5**" S="**0**" C="**#BBBBBB**" />
  <Border I="**6**" S="**0**" C="**#FFFFFF**" />
  <Border I="**7**" S="**0**" C="**#FFFFFF**" />
  </Borders>
  <Hyperlink />
  </Style>
  </HeaderRow>
[![](../../../minus.gif)](../../../#)<HeaderColumn xmlns="****">
  <Width>1</Width>[![](../../../minus.gif)](../../../#)<Style UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Fill C="**#FFB2AD**" />
[![](../../../minus.gif)](../../../#)<Borders>
  <Border I="**3**" S="**0**" C="**#BBBBBB**" />
  <Border I="**4**" S="**0**" C="**#BBBBBB**" />
  <Border I="**6**" S="**0**" C="**#FFFFFF**" />
  <Border I="**7**" S="**0**" C="**#FFFFFF**" />
  </Borders>
  <Hyperlink />
  </Style>
  </HeaderColumn>
[![](../../../minus.gif)](../../../#)<FooterRow xmlns="****">
  <Width>0</Width>  </FooterRow>
[![](../../../minus.gif)](../../../#)<FooterColumn xmlns="****">
  <Width>0</Width>  </FooterColumn>
  <PredefinedStyle xmlns="****">ExtRedStriped</PredefinedStyle>  <IsEmpty xmlns="****">0</IsEmpty>  </GetTabTableStyleResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTabTableStyle" :
  {
   "mon" : "HKJBPOFGHFLNFOAEPCMMOLCIPENIILFEJLJPJINGDHAMFJHO!M!S!PKIBJJDGGHFLNFOAELFBDMPPAAHADDJBECIFBLMKKFMCDJAFG!DataArea!DataSources!1!DataSourceSlices!1!Views!1!EaxTableStyle!TableStyle"
  }
}

### JSON-ответ:


{
 "GetTabTableStyleResult" :
  {
   "Name" : "EAX table style",
   "Range" :
    {
     "left" : "0",
     "top" : "0",
     "width" : "0",
     "height" : "0"
    },
   "Corner" :
    {
     "@UNS" : "2",
     "Text" :
      {
       "@VA" : "-1",
       "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
       "@HA" : "-1",
       "@WW" : "-1"
      },
     "Fill" :
      {
       "@C" : "#FFB2AD"
      },
     "Borders" :
      {
       "Border" :
        [
          {
           "@S" : "0",
           "@C" : "#FFFFFF",
           "@I" : "6"
          },
          {
           "@S" : "0",
           "@C" : "#FFFFFF",
           "@I" : "7"
          }
        ]
      },
     "Hyperlink" : ""
    },
   "FirstRow" :
    {
     "Width" : "1",
     "Style" :
      {
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "-1",
         "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
         "@HA" : "-1",
         "@WW" : "-1"
        },
       "Fill" :
        {
         "@C" : "#FFFFFF"
        },
       "Borders" : "",
       "Hyperlink" : ""
      }
    },
   "SecondRow" :
    {
     "Width" : "1",
     "Style" :
      {
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "-1",
         "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
         "@HA" : "-1",
         "@WW" : "-1"
        },
       "Fill" :
        {
         "@C" : "#FFD8D6"
        },
       "Borders" : "",
       "Hyperlink" : ""
      }
    },
   "FirstColumn" :
    {
     "Width" : "1"
    },
   "SecondColumn" :
    {
     "Width" : "1"
    },
   "HeaderRow" :
    {
     "Width" : "1",
     "Style" :
      {
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "-1",
         "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
         "@HA" : "-1",
         "@WW" : "-1"
        },
       "Fill" :
        {
         "@C" : "#FFD8D6"
        },
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "0",
             "@C" : "#BBBBBB",
             "@I" : "2"
            },
            {
             "@S" : "0",
             "@C" : "#BBBBBB",
             "@I" : "5"
            },
            {
             "@S" : "0",
             "@C" : "#FFFFFF",
             "@I" : "6"
            },
            {
             "@S" : "0",
             "@C" : "#FFFFFF",
             "@I" : "7"
            }
          ]
        },
       "Hyperlink" : ""
      }
    },
   "HeaderColumn" :
    {
     "Width" : "1",
     "Style" :
      {
       "@UNS" : "2",
       "Text" :
        {
         "@VA" : "-1",
         "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
         "@HA" : "-1",
         "@WW" : "-1"
        },
       "Fill" :
        {
         "@C" : "#FFB2AD"
        },
       "Borders" :
        {
         "Border" :
          [
            {
             "@S" : "0",
             "@C" : "#BBBBBB",
             "@I" : "3"
            },
            {
             "@S" : "0",
             "@C" : "#BBBBBB",
             "@I" : "4"
            },
            {
             "@S" : "0",
             "@C" : "#FFFFFF",
             "@I" : "6"
            },
            {
             "@S" : "0",
             "@C" : "#FFFFFF",
             "@I" : "7"
            }
          ]
        },
       "Hyperlink" : ""
      }
    },
   "FooterRow" :
    {
     "Width" : "0"
    },
   "FooterColumn" :
    {
     "Width" : "0"
    },
   "PredefinedStyle" : "ExtRedStriped",
   "IsEmpty" : "0"
  }
}


public static TabTableStyle GetTabTableStyle(string moniker, uint sourceKey, uint sliceKey, uint viewKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetTabTableStyle()
    {
        mon = moniker + "!DataArea!DataSources!" + sourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Views!" + viewKey.ToString() + "!EaxTableStyle!TableStyle"
    };
    // Получение стиля табличной области
    var result = somClient.GetTabTableStyle(tGet);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
