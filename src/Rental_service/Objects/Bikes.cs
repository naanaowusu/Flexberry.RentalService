﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Rental_service
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Bikes.
    /// </summary>
    //  *** Start programmer edit section *** (Bikes CustomAttributes)

    //  *** End programmer edit section *** (Bikes CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("BikesE", new string[] {
            "Name as \'Name\'",
            "Brands as \'Brands\'",
            "Brands.Name as \'Name\'"}, Hidden=new string[] {
            "Brands.Name"})]
    [MasterViewDefineAttribute("BikesE", "Brands", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [View("BikesL", new string[] {
            "Name as \'Name\'",
            "Brands.Name as \'Name\'"})]
    public class Bikes : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private IIS.Rental_service.BikeBrand fBrands;
        
        //  *** Start programmer edit section *** (Bikes CustomMembers)

        //  *** End programmer edit section *** (Bikes CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        //  *** Start programmer edit section *** (Bikes.Name CustomAttributes)

        //  *** End programmer edit section *** (Bikes.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                //  *** Start programmer edit section *** (Bikes.Name Get start)

                //  *** End programmer edit section *** (Bikes.Name Get start)
                string result = this.fName;
                //  *** Start programmer edit section *** (Bikes.Name Get end)

                //  *** End programmer edit section *** (Bikes.Name Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Bikes.Name Set start)

                //  *** End programmer edit section *** (Bikes.Name Set start)
                this.fName = value;
                //  *** Start programmer edit section *** (Bikes.Name Set end)

                //  *** End programmer edit section *** (Bikes.Name Set end)
            }
        }
        
        /// <summary>
        /// Bikes.
        /// </summary>
        //  *** Start programmer edit section *** (Bikes.Brands CustomAttributes)

        //  *** End programmer edit section *** (Bikes.Brands CustomAttributes)
        [NotNull()]
        public virtual IIS.Rental_service.BikeBrand Brands
        {
            get
            {
                //  *** Start programmer edit section *** (Bikes.Brands Get start)

                //  *** End programmer edit section *** (Bikes.Brands Get start)
                IIS.Rental_service.BikeBrand result = this.fBrands;
                //  *** Start programmer edit section *** (Bikes.Brands Get end)

                //  *** End programmer edit section *** (Bikes.Brands Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Bikes.Brands Set start)

                //  *** End programmer edit section *** (Bikes.Brands Set start)
                this.fBrands = value;
                //  *** Start programmer edit section *** (Bikes.Brands Set end)

                //  *** End programmer edit section *** (Bikes.Brands Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "BikesE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BikesE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BikesE", typeof(IIS.Rental_service.Bikes));
                }
            }
            
            /// <summary>
            /// "BikesL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BikesL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BikesL", typeof(IIS.Rental_service.Bikes));
                }
            }
        }
    }
}
